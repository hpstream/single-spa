import { NOT_LOADED } from "./app.helper";
import { appQueue } from "./queus";
import { invoke } from "./../navigation/invoke";
import { AppOption } from "./../type/index";

const APPS = [];

export function registerApplication(App: AppOption) {
  // 不校验
  App.status = NOT_LOADED;

  appQueue.push(App);

  return invoke();
}
