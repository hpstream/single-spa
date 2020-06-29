import { AppOption } from "./../type/index";

import {
  isNotLoaded,
  isActive,
  isUnmounted,
  shouldnotBeActive,
  isMounting,
} from "./app.helper";

export const appQueue: AppOption[] = [];

export function getAppsToLoad() {
  return appQueue.filter(isNotLoaded).filter(isActive);
}

export function getAppsToUnmount() {
  return appQueue.filter(isMounting).filter(shouldnotBeActive);
}

export function getAppsToMount() {
  return appQueue.filter(isUnmounted).filter(isActive);
}
