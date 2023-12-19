/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Unauthorized
 */
export type GetESIMESIMResponseBodyData = {
    /**
     * Message of the error
     */
    message?: string | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized
 */
export class GetESIMESIMResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetESIMESIMResponseBodyData;

    constructor(err: GetESIMESIMResponseBodyData, options?: ErrorOptions) {
        super("", options);
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const { rawResponse, ...data } = err;
        const content = JSON.stringify(data);
        this.message = [msg, content].filter(Boolean).join("\n");

        this.name = "GetESIMESIMResponseBody";
    }
}

/**
 * Bad Request
 */
export type GetESIMResponseBodyData = {
    /**
     * Message of the error
     */
    message?: string | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Bad Request
 */
export class GetESIMResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GetESIMResponseBodyData;

    constructor(err: GetESIMResponseBodyData, options?: ErrorOptions) {
        super("", options);
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const { rawResponse, ...data } = err;
        const content = JSON.stringify(data);
        this.message = [msg, content].filter(Boolean).join("\n");

        this.name = "GetESIMResponseBody";
    }
}

/** @internal */
export namespace GetESIMESIMResponseBody$ {
    export type Inbound = {
        message?: string | undefined;
        RawResponse?: Response | undefined;
    };

    export const inboundSchema: z.ZodType<GetESIMESIMResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            message: z.string().optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            return new GetESIMESIMResponseBody({
                ...(v.message === undefined ? null : { message: v.message }),
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
            });
        });
    export type Outbound = {
        message?: string | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetESIMESIMResponseBody> = z
        .instanceof(GetESIMESIMResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    message: z.string().optional(),
                    rawResponse: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                })
                .transform((v) => {
                    return {
                        ...(v.message === undefined ? null : { message: v.message }),
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                    };
                })
        );
}

/** @internal */
export namespace GetESIMResponseBody$ {
    export type Inbound = {
        message?: string | undefined;
        RawResponse?: Response | undefined;
    };

    export const inboundSchema: z.ZodType<GetESIMResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            message: z.string().optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            return new GetESIMResponseBody({
                ...(v.message === undefined ? null : { message: v.message }),
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
            });
        });
    export type Outbound = {
        message?: string | undefined;
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetESIMResponseBody> = z
        .instanceof(GetESIMResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    message: z.string().optional(),
                    rawResponse: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                })
                .transform((v) => {
                    return {
                        ...(v.message === undefined ? null : { message: v.message }),
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                    };
                })
        );
}
