/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type GetESIMMacRequest = {
    iccid: string;
};

export type GetESIMMacESIM = {
    /**
     * ID of the eSIM
     */
    iccid?: string | undefined;
    /**
     * SM-DP+ Address
     */
    smdpAddress?: string | undefined;
    /**
     * The manual activation code
     */
    manualActivationCode?: string | undefined;
};

/**
 * Successful Response
 */
export type GetESIMMacResponseBody = {
    esim?: GetESIMMacESIM | undefined;
};

export type GetESIMMacResponse = {
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
    object?: GetESIMMacResponseBody | undefined;
};

/** @internal */
export namespace GetESIMMacRequest$ {
    export type Inbound = {
        iccid: string;
    };

    export const inboundSchema: z.ZodType<GetESIMMacRequest, z.ZodTypeDef, Inbound> = z
        .object({
            iccid: z.string(),
        })
        .transform((v) => {
            return {
                iccid: v.iccid,
            };
        });

    export type Outbound = {
        iccid: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetESIMMacRequest> = z
        .object({
            iccid: z.string(),
        })
        .transform((v) => {
            return {
                iccid: v.iccid,
            };
        });
}

/** @internal */
export namespace GetESIMMacESIM$ {
    export type Inbound = {
        iccid?: string | undefined;
        smdpAddress?: string | undefined;
        manualActivationCode?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetESIMMacESIM, z.ZodTypeDef, Inbound> = z
        .object({
            iccid: z.string().optional(),
            smdpAddress: z.string().optional(),
            manualActivationCode: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.iccid === undefined ? null : { iccid: v.iccid }),
                ...(v.smdpAddress === undefined ? null : { smdpAddress: v.smdpAddress }),
                ...(v.manualActivationCode === undefined
                    ? null
                    : { manualActivationCode: v.manualActivationCode }),
            };
        });

    export type Outbound = {
        iccid?: string | undefined;
        smdpAddress?: string | undefined;
        manualActivationCode?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetESIMMacESIM> = z
        .object({
            iccid: z.string().optional(),
            smdpAddress: z.string().optional(),
            manualActivationCode: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.iccid === undefined ? null : { iccid: v.iccid }),
                ...(v.smdpAddress === undefined ? null : { smdpAddress: v.smdpAddress }),
                ...(v.manualActivationCode === undefined
                    ? null
                    : { manualActivationCode: v.manualActivationCode }),
            };
        });
}

/** @internal */
export namespace GetESIMMacResponseBody$ {
    export type Inbound = {
        esim?: GetESIMMacESIM$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetESIMMacResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            esim: z.lazy(() => GetESIMMacESIM$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.esim === undefined ? null : { esim: v.esim }),
            };
        });

    export type Outbound = {
        esim?: GetESIMMacESIM$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetESIMMacResponseBody> = z
        .object({
            esim: z.lazy(() => GetESIMMacESIM$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.esim === undefined ? null : { esim: v.esim }),
            };
        });
}

/** @internal */
export namespace GetESIMMacResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetESIMMacResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetESIMMacResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetESIMMacResponseBody$.inboundSchema).optional(),
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
        object?: GetESIMMacResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetESIMMacResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetESIMMacResponseBody$.outboundSchema).optional(),
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
