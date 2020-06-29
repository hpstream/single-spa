interface AppOption {
    appName: string;
    loadUrl: string;
    activeWhen: Function;
    customProps: Object;
    status?: string;
}
export declare function registerApplication(option: AppOption): void;
export {};
