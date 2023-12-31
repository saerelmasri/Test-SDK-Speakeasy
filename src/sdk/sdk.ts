/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK } from "../lib/sdks";
import { Destinations } from "./destinations";
import { Esim } from "./esim";
import { Packages } from "./packages";
import { Purchases } from "./purchases";

export class SDKSpeakeasy extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }

    private _destinations?: Destinations;
    get destinations() {
        return (this._destinations ??= new Destinations(this.options$));
    }

    private _packages?: Packages;
    get packages() {
        return (this._packages ??= new Packages(this.options$));
    }

    private _purchases?: Purchases;
    get purchases() {
        return (this._purchases ??= new Purchases(this.options$));
    }

    private _eSIM?: Esim;
    get eSIM() {
        return (this._eSIM ??= new Esim(this.options$));
    }
}
