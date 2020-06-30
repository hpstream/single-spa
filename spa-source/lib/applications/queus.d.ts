import { AppOption } from "./../type/index";
export declare const appQueue: AppOption[];
export declare function getAppsToLoad(): AppOption[];
export declare function getAppsToNotBootstrapped(): AppOption[];
export declare function getAppsToUnmount(): AppOption[];
export declare function getAppsToMount(): AppOption[];
