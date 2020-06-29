import { loadBundle ,NOT_LOADED } from "./app.helper";

interface AppOption {
   appName:string;
   loadUrl: string;
   activeWhen: Function;
   customProps: Object;
   status?: string;
}
const APPS = [];


export function registerApplication(option: AppOption) {
    // 不校验
    option.status = NOT_LOADED;

    APPS.push(option);
    

}