/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RFCDate } from "../../types";
import { z } from "zod";

export type EditPurchaseRequestBody = {
    /**
     * ID of the purchase
     */
    purchaseId: string;
    /**
     * Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months.
     */
    startDate: RFCDate;
    /**
     * End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 60 days after Start date.
     */
    endDate: RFCDate;
    /**
     * Epoch value representing the start time of the package's validity. This timestamp can be set to the current time or any time within the next 12 months.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    startTime?: number | undefined;
    /**
     * Epoch value representing the end time of the package's validity. End time can be maximum 60 days after Start time.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    endTime?: number | undefined;
};

/**
 * Successful Response
 */
export type EditPurchaseResponseBody = {
    /**
     * ID of the purchase
     */
    purchaseId?: string | undefined;
    /**
     * Start date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ'
     */
    newStartDate?: Date | undefined;
    /**
     * End date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ'
     */
    newEndDate?: Date | undefined;
    /**
     * Epoch value representing the new start time of the package's validity
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    newStartTime?: number | undefined;
    /**
     * Epoch value representing the new end time of the package's validity
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    newEndTime?: number | undefined;
};

export type EditPurchaseResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Successful Response
     */
    object?: EditPurchaseResponseBody | undefined;
};

/** @internal */
export namespace EditPurchaseRequestBody$ {
    export type Inbound = {
        purchaseId: string;
        startDate: string;
        endDate: string;
        startTime?: number | undefined;
        endTime?: number | undefined;
    };

    export const inboundSchema: z.ZodType<EditPurchaseRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            purchaseId: z.string(),
            startDate: z.string().transform((v) => new RFCDate(v)),
            endDate: z.string().transform((v) => new RFCDate(v)),
            startTime: z.number().optional(),
            endTime: z.number().optional(),
        })
        .transform((v) => {
            return {
                purchaseId: v.purchaseId,
                startDate: v.startDate,
                endDate: v.endDate,
                ...(v.startTime === undefined ? null : { startTime: v.startTime }),
                ...(v.endTime === undefined ? null : { endTime: v.endTime }),
            };
        });

    export type Outbound = {
        purchaseId: string;
        startDate: string;
        endDate: string;
        startTime?: number | undefined;
        endTime?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EditPurchaseRequestBody> = z
        .object({
            purchaseId: z.string(),
            startDate: z.instanceof(RFCDate).transform((v) => v.toString()),
            endDate: z.instanceof(RFCDate).transform((v) => v.toString()),
            startTime: z.number().optional(),
            endTime: z.number().optional(),
        })
        .transform((v) => {
            return {
                purchaseId: v.purchaseId,
                startDate: v.startDate,
                endDate: v.endDate,
                ...(v.startTime === undefined ? null : { startTime: v.startTime }),
                ...(v.endTime === undefined ? null : { endTime: v.endTime }),
            };
        });
}

/** @internal */
export namespace EditPurchaseResponseBody$ {
    export type Inbound = {
        purchaseId?: string | undefined;
        newStartDate?: string | undefined;
        newEndDate?: string | undefined;
        newStartTime?: number | undefined;
        newEndTime?: number | undefined;
    };

    export const inboundSchema: z.ZodType<EditPurchaseResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            purchaseId: z.string().optional(),
            newStartDate: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            newEndDate: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            newStartTime: z.number().optional(),
            newEndTime: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.purchaseId === undefined ? null : { purchaseId: v.purchaseId }),
                ...(v.newStartDate === undefined ? null : { newStartDate: v.newStartDate }),
                ...(v.newEndDate === undefined ? null : { newEndDate: v.newEndDate }),
                ...(v.newStartTime === undefined ? null : { newStartTime: v.newStartTime }),
                ...(v.newEndTime === undefined ? null : { newEndTime: v.newEndTime }),
            };
        });

    export type Outbound = {
        purchaseId?: string | undefined;
        newStartDate?: string | undefined;
        newEndDate?: string | undefined;
        newStartTime?: number | undefined;
        newEndTime?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EditPurchaseResponseBody> = z
        .object({
            purchaseId: z.string().optional(),
            newStartDate: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            newEndDate: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            newStartTime: z.number().optional(),
            newEndTime: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.purchaseId === undefined ? null : { purchaseId: v.purchaseId }),
                ...(v.newStartDate === undefined ? null : { newStartDate: v.newStartDate }),
                ...(v.newEndDate === undefined ? null : { newEndDate: v.newEndDate }),
                ...(v.newStartTime === undefined ? null : { newStartTime: v.newStartTime }),
                ...(v.newEndTime === undefined ? null : { newEndTime: v.newEndTime }),
            };
        });
}

/** @internal */
export namespace EditPurchaseResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: EditPurchaseResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<EditPurchaseResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => EditPurchaseResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: EditPurchaseResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EditPurchaseResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => EditPurchaseResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
