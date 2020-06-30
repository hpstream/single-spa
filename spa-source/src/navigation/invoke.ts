import {
  getAppsToLoad,
  getAppsToUnmount,
  getAppsToMount,
  getAppsToNotBootstrapped,
} from "./../applications/queus";
import { toLoadPromise } from "./../lifecycles/load";
import { toUnmountPromise } from "./../lifecycles/unmount";
import { toBootstrapPromise } from "./../lifecycles/bootstrap";
import { toMountPromise } from "./../lifecycles/mount";
import { isStarted } from "./../start";

// 队列函数
export function invoke() {
  if (isStarted()) {
    return performAppChanges();
  }
  // return loadApps();
}

// function loadApps() {
//   var loadPromises = getAppsToLoad().map(toLoadPromise);
//   return Promise.all(loadPromises);
// }

function performAppChanges() {
  // 先找到应该被卸载的
  let unmountApps = getAppsToUnmount();
  let unmountPromises = Promise.all(unmountApps.map(toUnmountPromise));

  // let toMountPromises = Promise.all(mountApps.map(toMountPromise));

  unmountPromises
    .then(() => {
      // 加载
      var loadPromises = getAppsToLoad(); // 如果模块未被加载，则 status 变成 NOT_BOOTSTRAPPED
      var NotBootstrappApp = getAppsToNotBootstrapped();
      var mountApps = getAppsToMount();
  
      // 需要加载的路由不在loadPromises,就在  toMountPromises中
      if (loadPromises.length) {
        return Promise.all(loadPromises.map(toLoadPromise)).then(() => {
          return Promise.all(loadPromises.map(toBootstrapPromise)).then(() => {
            return Promise.all(loadPromises.map(toMountPromise));
          });
        });
      }

      if (mountApps.length) {
        return Promise.all(mountApps.map(toMountPromise));
      }
    })
    .then(() => {
      console.log("gameOver");
    });
}
