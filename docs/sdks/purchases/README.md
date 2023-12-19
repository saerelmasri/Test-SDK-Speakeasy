# Purchases
(*purchases*)

## Overview

The Purchases endpoints offer extensive capabilities for managing eSIM purchases. Partners can utilize these endpoints to acquire new eSIMs, top-up an existing eSIM, list all existing purchases, update the activation period for future purchases, monitor the consumption and status of current purchases, and access other functionalities to support different purchasing workflows and requirements.

### Available Operations

* [createPurchase](#createpurchase) - Create Purchase
* [listPurchases](#listpurchases) - List Purchases
* [topUpESIM](#topupesim) - Top-up eSIM
* [editPurchase](#editpurchase) - Edit Purchase
* [getPurchaseConsumption](#getpurchaseconsumption) - Get Purchase Consumption

## createPurchase

This endpoint is used to purchase a new eSIM by providing the package details.

### Example Usage

```typescript
import { SDKSpeakeasy } from "sdk-speakeasy";
import { RFCDate } from "sdk-speakeasy/types";

async function run() {
  const sdk = new SDKSpeakeasy({
    oAuth2ClientCredentials: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.purchases.createPurchase({
    destination: "FRA",
    dataLimitInGB: 1,
    startDate: new RFCDate("2023-11-01T00:00:00Z"),
    endDate: new RFCDate("2023-11-20T00:00:00Z"),
    email: "example@domain.com",
    networkBrand: "CELITECH",
    startTime: 1672051891,
    endTime: 1672396681,
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
| `request`                                                                                                                                                                      | [operations.CreatePurchaseRequestBody](../../models/operations/createpurchaserequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreatePurchaseResponse](../../models/operations/createpurchaseresponse.md)>**
### Errors

| Error Object                               | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.CreatePurchaseResponseBody          | 400                                        | application/json                           |
| errors.CreatePurchasePurchasesResponseBody | 401                                        | application/json                           |
| errors.SDKError                            | 4xx-5xx                                    | */*                                        |

## listPurchases

This endpoint can be used to list all the successful purchases made between a given interval.

### Example Usage

```typescript
import { SDKSpeakeasy } from "sdk-speakeasy";
import { RFCDate } from "sdk-speakeasy/types";

async function run() {
  const sdk = new SDKSpeakeasy({
    oAuth2ClientCredentials: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.purchases.listPurchases({
    iccid: "1111222233334444555",
    afterDate: new RFCDate("2023-11-01T00:00:00Z"),
    beforeDate: new RFCDate("2023-11-20T00:00:00Z"),
    afterCursor: "Y3JlYXRlZEF0OjE1OTk0OTMwOTgsZGVzdGluYXRpb246QVVTLG1pbkRheXM6MCxkYXRhTGltaXRJbkJ5dGVzOjUzNjg3MDkxMjA",
    limit: 20,
    after: 1672052365,
    before: 1672396681,
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
| `request`                                                                                                                                                                      | [operations.ListPurchasesRequest](../../models/operations/listpurchasesrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListPurchasesResponse](../../models/operations/listpurchasesresponse.md)>**
### Errors

| Error Object                              | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.ListPurchasesResponseBody          | 400                                       | application/json                          |
| errors.ListPurchasesPurchasesResponseBody | 401                                       | application/json                          |
| errors.SDKError                           | 4xx-5xx                                   | */*                                       |

## topUpESIM

This endpoint is used to top-up an eSIM with the previously associated destination by providing an existing ICCID and the package details. The top-up is not feasible for eSIMs in "DELETED" or "ERROR" state.

### Example Usage

```typescript
import { SDKSpeakeasy } from "sdk-speakeasy";
import { RFCDate } from "sdk-speakeasy/types";

async function run() {
  const sdk = new SDKSpeakeasy({
    oAuth2ClientCredentials: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.purchases.topUpESIM({
    iccid: "1111222233334444555",
    dataLimitInGB: 1,
    startDate: new RFCDate("2023-11-01T00:00:00Z"),
    endDate: new RFCDate("2023-11-20T00:00:00Z"),
    email: "example@domain.com",
    startTime: 1672051891,
    endTime: 1672396681,
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
| `request`                                                                                                                                                                      | [operations.TopUpESIMRequestBody](../../models/operations/topupesimrequestbody.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.TopUpESIMResponse](../../models/operations/topupesimresponse.md)>**
### Errors

| Error Object                          | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.TopUpESIMResponseBody          | 400                                   | application/json                      |
| errors.TopUpESIMPurchasesResponseBody | 401                                   | application/json                      |
| errors.SDKError                       | 4xx-5xx                               | */*                                   |

## editPurchase

This endpoint allows you to modify the dates of an existing package with a future activation start time. Editing can only be performed for packages that have not been activated, and it cannot change the package size. The modification must not change the package duration category to ensure pricing consistency.

### Example Usage

```typescript
import { SDKSpeakeasy } from "sdk-speakeasy";
import { RFCDate } from "sdk-speakeasy/types";

async function run() {
  const sdk = new SDKSpeakeasy({
    oAuth2ClientCredentials: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.purchases.editPurchase({
    purchaseId: "ae471106-c8b4-42cf-b83a-b061291f2922",
    startDate: new RFCDate("2023-11-01T00:00:00Z"),
    endDate: new RFCDate("2023-11-20T00:00:00Z"),
    startTime: 1672051891,
    endTime: 1672396681,
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
| `request`                                                                                                                                                                      | [operations.EditPurchaseRequestBody](../../models/operations/editpurchaserequestbody.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.EditPurchaseResponse](../../models/operations/editpurchaseresponse.md)>**
### Errors

| Error Object                             | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.EditPurchaseResponseBody          | 400                                      | application/json                         |
| errors.EditPurchasePurchasesResponseBody | 401                                      | application/json                         |
| errors.SDKError                          | 4xx-5xx                                  | */*                                      |

## getPurchaseConsumption

This endpoint can be called for consumption notifications (e.g. every 1 hour or when the user clicks a button). It returns the data balance (consumption) of purchased packages.

### Example Usage

```typescript
import { SDKSpeakeasy } from "sdk-speakeasy";

async function run() {
  const sdk = new SDKSpeakeasy({
    oAuth2ClientCredentials: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const purchaseId = "4973fa15-6979-4daa-9cf3-672620df819c";
  
  const res = await sdk.purchases.getPurchaseConsumption(purchaseId);

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `purchaseId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.GetPurchaseConsumptionResponse](../../models/operations/getpurchaseconsumptionresponse.md)>**
### Errors

| Error Object                                       | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.GetPurchaseConsumptionResponseBody          | 400                                                | application/json                                   |
| errors.GetPurchaseConsumptionPurchasesResponseBody | 401                                                | application/json                                   |
| errors.SDKError                                    | 4xx-5xx                                            | */*                                                |
