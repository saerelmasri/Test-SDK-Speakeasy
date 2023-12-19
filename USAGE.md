<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDKSpeakeasy } from "sdk-speakeasy";

async function run() {
    const sdk = new SDKSpeakeasy({
        oAuth2ClientCredentials: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const res = await sdk.destinations.listDestinations();

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End SDK Example Usage [usage] -->