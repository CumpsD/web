// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * Chainflip Broker as a Service
 * Run your own Chainflip Broker without any hassle.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChainflipBaasNetworksNetworkInfo } from './ChainflipBaasNetworksNetworkInfo';
import {
    ChainflipBaasNetworksNetworkInfoFromJSON,
    ChainflipBaasNetworksNetworkInfoFromJSONTyped,
    ChainflipBaasNetworksNetworkInfoToJSON,
} from './ChainflipBaasNetworksNetworkInfo';

/**
 * 
 * @export
 * @interface ChainflipBaasNetworksNetworksResponse
 */
export interface ChainflipBaasNetworksNetworksResponse {
    /**
     * All available networks.
     * @type {Array<ChainflipBaasNetworksNetworkInfo>}
     * @memberof ChainflipBaasNetworksNetworksResponse
     */
    readonly networks?: Array<ChainflipBaasNetworksNetworkInfo>;
}

/**
 * Check if a given object implements the ChainflipBaasNetworksNetworksResponse interface.
 */
export function instanceOfChainflipBaasNetworksNetworksResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChainflipBaasNetworksNetworksResponseFromJSON(json: any): ChainflipBaasNetworksNetworksResponse {
    return ChainflipBaasNetworksNetworksResponseFromJSONTyped(json, false);
}

export function ChainflipBaasNetworksNetworksResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainflipBaasNetworksNetworksResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'networks': !exists(json, 'networks') ? undefined : ((json['networks'] as Array<any>).map(ChainflipBaasNetworksNetworkInfoFromJSON)),
    };
}

export function ChainflipBaasNetworksNetworksResponseToJSON(value?: ChainflipBaasNetworksNetworksResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

