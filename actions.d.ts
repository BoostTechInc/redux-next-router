/// <reference types="node" />
import { UrlObject } from 'url';
import { PUSH, REPLACE, GO, PREFETCH } from './routerMethods';
import { LocationState, RouterState } from './types';
type Url = UrlObject | string;
export declare const LOCATION_CHANGE = "@@router/LOCATION_CHANGE";
export type LocationChangeAction = {
    type: typeof LOCATION_CHANGE;
    payload: RouterState;
};
export declare const onLocationChanged: (location: LocationState) => LocationChangeAction;
export declare const CALL_ROUTER_METHOD = "@@router/CALL_ROUTER_METHOD";
export type CallRouterMethodPushPayload = {
    type: typeof CALL_ROUTER_METHOD;
    payload: {
        method: typeof PUSH;
        args: [Url, Url?, any?];
    };
};
export type CallRouterMethodReplacePayload = {
    type: typeof CALL_ROUTER_METHOD;
    payload: {
        method: typeof REPLACE;
        args: [Url, Url?, any?];
    };
};
export type CallRouterMethodGoPayload = {
    type: typeof CALL_ROUTER_METHOD;
    payload: {
        method: typeof GO;
        args: [number];
    };
};
export type CallRouterMethodPrefetchPayload = {
    type: typeof CALL_ROUTER_METHOD;
    payload: {
        method: typeof PREFETCH;
        args: [string];
    };
};
export type CallRouterMethodAction = CallRouterMethodPushPayload | CallRouterMethodReplacePayload | CallRouterMethodGoPayload | CallRouterMethodPrefetchPayload;
export declare const push: (url: Url, as?: Url, options?: any) => CallRouterMethodPushPayload;
export declare const replace: (url: Url, as?: Url, options?: any) => CallRouterMethodReplacePayload;
export declare const go: (number: number) => CallRouterMethodGoPayload;
export declare const prefetch: (url: string) => CallRouterMethodPrefetchPayload;
export declare const goBack: () => CallRouterMethodGoPayload;
export declare const goForward: () => CallRouterMethodGoPayload;
export declare const routerActions: {
    push: (url: Url, as?: Url, options?: any) => CallRouterMethodPushPayload;
    replace: (url: Url, as?: Url, options?: any) => CallRouterMethodReplacePayload;
    go: (number: number) => CallRouterMethodGoPayload;
    goBack: () => CallRouterMethodGoPayload;
    goForward: () => CallRouterMethodGoPayload;
    prefetch: (url: string) => CallRouterMethodPrefetchPayload;
};
export {};
