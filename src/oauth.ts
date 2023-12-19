import { SDK_METADATA } from "./lib/config";
import * as z from "zod";

const tokenResponseSchema = z.object({
  access_token: z.string(),
  expires_in: z.number().positive(),
});

const tolerance = 5 * 60 * 1000;

export function withAuthorization(
  clientSecret: string,
  clientID: string,
  options: { tokenStore?: TokenStore, url?: string }
) {
  const { tokenStore = new InMemoryTokenStore(), url = "https://test-core-partners.auth.us-east-1.amazoncognito.com/oauth2/token" } = options;

  return async (): Promise<string> => {
    const session = await tokenStore.get();

    // Get a new token only if the current one is about to expire in 5 minutes
    if (session && session.expires > Date.now()) {
      return session.token;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "user-agent": SDK_METADATA.userAgent,
        },
        body: new URLSearchParams({
          client_secret: clientSecret,
          client_id: clientID,
          grant_type: "client_credentials",
        }),
      });

      if (!response.ok) {
        throw new Error("Unexpected status code: " + response.status);
      }

      const json = await response.json();
      const data = tokenResponseSchema.parse(json);

      await tokenStore.set(
        data.access_token,
        Date.now() + data.expires_in * 1000 - tolerance
      );

      return data.access_token;
    } catch (error) {
      throw new Error("Failed to obtain OAuth token: " + error);
    }
  };
}

export interface TokenStore {
  get(): Promise<{ token: string; expires: number } | undefined>;
  set(token: string, expires: number): Promise<void>;
}

export class InMemoryTokenStore implements TokenStore {
  private token = "";
  private expires = Date.now();

  constructor() {}

  async get() {
    return { token: this.token, expires: this.expires };
  }

  async set(token: string, expires: number) {
    this.token = token;
    this.expires = expires;
  }
}

export interface RedisLikeClient {
  get(key: string): Promise<unknown>;
  set(key: string, value: string): Promise<unknown>;
}

export class RedisTokenStore implements TokenStore {
  private sessionKey = "lynx:session";

  constructor(private client: RedisLikeClient) {}

  async get() {
    const session = await this.client.get(this.sessionKey);
    if (session == null) {
      return;
    }

    if (typeof session !== "string") {
      throw new TypeError(
        `Expected a string from redis (key: "${this.sessionKey}") but got ${typeof session}`
      );
    }

    const parsed = tokenResponseSchema.parse(JSON.parse(session));
    return { token: parsed.access_token, expires: parsed.expires_in };
  }

  async set(token: string, expires: number) {
    await this.client.set(
      this.sessionKey,
      JSON.stringify({
        access_token: token,
        expires_in: expires,
      })
    );
  }
}
