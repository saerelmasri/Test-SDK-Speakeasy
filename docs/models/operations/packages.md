# Packages


## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `id`                                            | *string*                                        | :heavy_minus_sign:                              | ID of the package                               | 4973fa15-6979-4daa-9cf3-672620df819c            |
| `destination`                                   | *string*                                        | :heavy_minus_sign:                              | ISO representation of the package's destination | FRA                                             |
| `dataLimitInBytes`                              | *number*                                        | :heavy_minus_sign:                              | Size of the package in Bytes                    | 1073741824                                      |
| `minDays`                                       | *number*                                        | :heavy_minus_sign:                              | Min number of days for the package              | 0                                               |
| `maxDays`                                       | *number*                                        | :heavy_minus_sign:                              | Max number of days for the package              | 30                                              |
| `priceInCents`                                  | *number*                                        | :heavy_minus_sign:                              | Price of the package in cents                   | 10000                                           |