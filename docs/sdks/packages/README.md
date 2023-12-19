# Packages
(*packages*)

## Overview

The Packages endpoint focuses on the data packages offered by CELITECH.

### Available Operations

* [listPackages](#listpackages) - List Packages

## listPackages

List of available packages

### Example Usage

```typescript
import { SDKSpeakeasy } from "sdk-speakeasy";
import { RFCDate } from "sdk-speakeasy/types";

async function run() {
  const sdk = new SDKSpeakeasy({
    oAuth2ClientCredentials: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.packages.listPackages({
    destination: "FRA",
    startDate: new RFCDate("2023-11-01T00:00:00Z"),
    endDate: new RFCDate("2023-11-20T00:00:00Z"),
    afterCursor: "Y3JlYXRlZEF0OjE1OTk0OTMwOTgsZGVzdGluYXRpb246QVVTLG1pbkRheXM6MCxkYXRhTGltaXRJbkJ5dGVzOjUzNjg3MDkxMjA",
    limit: 20,
    startTime: 1672052449,
    endTime: 1672396681,
    duration: 344232,
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPackagesRequest](../../models/operations/listpackagesrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListPackagesResponse](../../models/operations/listpackagesresponse.md)>**
### Errors

| Error Object                            | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.ListPackagesResponseBody         | 400                                     | application/json                        |
| errors.ListPackagesPackagesResponseBody | 401                                     | application/json                        |
| errors.SDKError                         | 4xx-5xx                                 | */*                                     |
