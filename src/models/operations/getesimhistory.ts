/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type GetESIMHistoryRequest = {
    iccid: string;
};

export type History = {
    /**
     * The status of the eSIM at a given time, possible values are 'RELEASED', 'DOWNLOADED', 'INSTALLED', 'ENABLED', 'DELETED', or 'ERROR'
     */
    status?: string | undefined;
    /**
     * The date when the eSIM status changed in the format 'yyyy-MM-ddThh:mm:ssZZ'
     */
    statusDate?: Date | undefined;
    /**
     * Epoch value representing the date when the eSIM status changed
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    date?: number | undefined;
};

export type GetESIMHistoryESIM = {
    /**
     * ID of the eSIM
     */
    iccid?: string | undefined;
    history?: Array<History> | undefined;
};

/**
 * Successful Response
 */
export type GetESIMHistoryResponseBody = {
    esim?: GetESIMHistoryESIM | undefined;
};

export type GetESIMHistoryResponse = {
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
    object?: GetESIMHistoryResponseBody | undefined;
};

/** @internal */
export namespace GetESIMHistoryRequest$ {
    export type Inbound = {
        iccid: string;
    };

    export const inboundSchema: z.ZodType<GetESIMHistoryRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetESIMHistoryRequest> = z
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
export namespace History$ {
    export type Inbound = {
        status?: string | undefined;
        statusDate?: string | undefined;
        date?: number | undefined;
    };

    export const inboundSchema: z.ZodType<History, z.ZodTypeDef, Inbound> = z
        .object({
            status: z.string().optional(),
            statusDate: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            date: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.statusDate === undefined ? null : { statusDate: v.statusDate }),
                ...(v.date === undefined ? null : { date: v.date }),
            };
        });

    export type Outbound = {
        status?: string | undefined;
        statusDate?: string | undefined;
        date?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, History> = z
        .object({
            status: z.string().optional(),
            statusDate: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            date: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.statusDate === undefined ? null : { statusDate: v.statusDate }),
                ...(v.date === undefined ? null : { date: v.date }),
            };
        });
}

/** @internal */
export namespace GetESIMHistoryESIM$ {
    export type Inbound = {
        iccid?: string | undefined;
        history?: Array<History$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetESIMHistoryESIM, z.ZodTypeDef, Inbound> = z
        .object({
            iccid: z.string().optional(),
            history: z.array(z.lazy(() => History$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.iccid === undefined ? null : { iccid: v.iccid }),
                ...(v.history === undefined ? null : { history: v.history }),
            };
        });

    export type Outbound = {
        iccid?: string | undefined;
        history?: Array<History$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetESIMHistoryESIM> = z
        .object({
            iccid: z.string().optional(),
            history: z.array(z.lazy(() => History$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.iccid === undefined ? null : { iccid: v.iccid }),
                ...(v.history === undefined ? null : { history: v.history }),
            };
        });
}

/** @internal */
export namespace GetESIMHistoryResponseBody$ {
    export type Inbound = {
        esim?: GetESIMHistoryESIM$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetESIMHistoryResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            esim: z.lazy(() => GetESIMHistoryESIM$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.esim === undefined ? null : { esim: v.esim }),
            };
        });

    export type Outbound = {
        esim?: GetESIMHistoryESIM$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetESIMHistoryResponseBody> = z
        .object({
            esim: z.lazy(() => GetESIMHistoryESIM$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.esim === undefined ? null : { esim: v.esim }),
            };
        });
}

/** @internal */
export namespace GetESIMHistoryResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetESIMHistoryResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetESIMHistoryResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetESIMHistoryResponseBody$.inboundSchema).optional(),
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
        object?: GetESIMHistoryResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetESIMHistoryResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetESIMHistoryResponseBody$.outboundSchema).optional(),
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
