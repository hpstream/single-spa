import { AppOption } from "./../type/index";
import {
  LOAD_RESOURCE_CODE,
  NOT_BOOTSTRAPPED,
  LOAD_ERROR,
} from "./../applications/app.helper";

export function toLoadPromise(app: AppOption) {
  return loadBundle(app).then((module) => {
    return moduleInit(module, app);
  });
}
function moduleInit(module, app) {
  app.status = NOT_BOOTSTRAPPED;
  app.bootstrap = module.bootstrap;
  app.mount = module.mount;
  app.unmount = module.unmount;
}
export function loadBundle(app: AppOption) {
  return new Promise((reslove, reject) => {
    var script = document.createElement("script");
    script.src = app.loadUrl;
    app.status = LOAD_RESOURCE_CODE;
    document.head.appendChild(script);
    script.onload = (e) => {
      // app.status = NOT_BOOTSTRAPPED;
      console.log(window[app.appName]);
      reslove(window[app.appName]);
    };
    script.onerror = (e) => {
      app.status = LOAD_ERROR;
      reject(e);
    };
  });
}
