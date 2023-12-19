# sdk-speakeasy

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add sdk-speakeasy
```

### Yarn

```bash
yarn add sdk-speakeasy
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [destinations](docs/sdks/destinations/README.md)

* [listDestinations](docs/sdks/destinations/README.md#listdestinations) - List Destinations

### [packages](docs/sdks/packages/README.md)

* [listPackages](docs/sdks/packages/README.md#listpackages) - List Packages

### [purchases](docs/sdks/purchases/README.md)

* [createPurchase](docs/sdks/purchases/README.md#createpurchase) - Create Purchase
* [listPurchases](docs/sdks/purchases/README.md#listpurchases) - List Purchases
* [topUpESIM](docs/sdks/purchases/README.md#topupesim) - Top-up eSIM
* [editPurchase](docs/sdks/purchases/README.md#editpurchase) - Edit Purchase
* [getPurchaseConsumption](docs/sdks/purchases/README.md#getpurchaseconsumption) - Get Purchase Consumption

### [eSIM](docs/sdks/esim/README.md)

* [getESIM](docs/sdks/esim/README.md#getesim) - Get eSIM Status
* [getESIMDevice](docs/sdks/esim/README.md#getesimdevice) - Get eSIM Device
* [getESIMHistory](docs/sdks/esim/README.md#getesimhistory) - Get eSIM History
* [getESIMMac](docs/sdks/esim/README.md#getesimmac) - Get eSIM MAC
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                                    | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.ListDestinationsResponseBody             | 400                                             | application/json                                |
| errors.ListDestinationsDestinationsResponseBody | 401                                             | application/json                                |
| errors.SDKError                                 | 4xx-5xx                                         | */*                                             |

Example

```typescript
import { SDKSpeakeasy } from "sdk-speakeasy";
import * as errors from "sdk-speakeasy/models/errors";

async function run() {
    const sdk = new SDKSpeakeasy({
        oAuth2ClientCredentials: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const res = await sdk.destinations.listDestinations().catch((err) => {
        if (err instanceof errors.ListDestinationsResponseBody) {
            console.error(err); // handle exception
            return null;
        } else if (err instanceof errors.ListDestinationsDestinationsResponseBody) {
            console.error(err); // handle exception
            return null;
        } else {
            throw err;
        }
    });

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test` | None |




### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { SDKSpeakeasy } from "sdk-speakeasy";
import { HTTPClient } from "sdk-speakeasy/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SDKSpeakeasy({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                      | Type                      | Scheme                    |
| ------------------------- | ------------------------- | ------------------------- |
| `oAuth2ClientCredentials` | oauth2                    | OAuth2 token              |

To authenticate with the API the `oAuth2ClientCredentials` parameter must be set when initializing the SDK client instance. For example:
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
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
