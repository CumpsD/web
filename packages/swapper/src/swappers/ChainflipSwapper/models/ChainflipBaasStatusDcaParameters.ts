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
/**
 * 
 * @export
 * @interface ChainflipBaasStatusDcaParameters
 */
export interface ChainflipBaasStatusDcaParameters {
    /**
     * 
     * @type {number}
     * @memberof ChainflipBaasStatusDcaParameters
     */
    readonly numberOfChunks?: number;
    /**
     * 
     * @type {number}
     * @memberof ChainflipBaasStatusDcaParameters
     */
    readonly chunkIntervalBlocks?: number;
}

/**
 * Check if a given object implements the ChainflipBaasStatusDcaParameters interface.
 */
export function instanceOfChainflipBaasStatusDcaParameters(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChainflipBaasStatusDcaParametersFromJSON(json: any): ChainflipBaasStatusDcaParameters {
    return ChainflipBaasStatusDcaParametersFromJSONTyped(json, false);
}

export function ChainflipBaasStatusDcaParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainflipBaasStatusDcaParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'numberOfChunks': !exists(json, 'numberOfChunks') ? undefined : json['numberOfChunks'],
        'chunkIntervalBlocks': !exists(json, 'chunkIntervalBlocks') ? undefined : json['chunkIntervalBlocks'],
    };
}

export function ChainflipBaasStatusDcaParametersToJSON(value?: ChainflipBaasStatusDcaParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

