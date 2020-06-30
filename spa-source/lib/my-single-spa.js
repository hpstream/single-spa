(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.mySingleSpa = {}));
}(this, (function (exports) { 'use strict';

  // 未加载
  const NOT_LOADED = "NOT_LOADED";
  // 加载app代码中
  const LOAD_RESOURCE_CODE = "LOAD_RESOURCE_CODE";
  // 加载成功，但为启动
  const NOT_BOOTSTRAPPED = "NOT_BOOTSTRAPPED";
  // 启动中
  const BOOTSTRAPPING = "BOOTSTRAPPING";
  // 挂载中
  const MOUNTING = "MOUNTING";
  // 挂载成功
  const MOUNTED = "MOUNTED";
  // 卸载中
  const UNMOUNTING = "UNMOUNTING";
  // 加载时参数校验未通过，或非致命错误
  const SKIP_BECAUSE_BROKEN = "SKIP_BECAUSE_BROKEN";
  // 加载时遇到致命错误
  const LOAD_ERROR = "LOAD_ERROR";
  function isNotLoaded(app) {
      return app.status === NOT_LOADED;
  }
  function isMounting(app) {
      return app.status === MOUNTED;
  }
  function isUnmounted(app) {
      return app.status === UNMOUNTING;
  }
  function isNotBootstrapped(app) {
      return app.status === "NOT_BOOTSTRAPPED";
  }
  function isActive(app) {
      try {
          return app.activeWhen(window.location);
      }
      catch (error) {
          app.status = SKIP_BECAUSE_BROKEN;
          console.log(error);
      }
  }
  function shouldnotBeActive(app) {
      try {
          return !app.activeWhen(window.location);
      }
      catch (error) {
          app.status = SKIP_BECAUSE_BROKEN;
          console.log(error);
      }
  }

  const appQueue = [];
  function getAppsToLoad() {
      return appQueue.filter(isNotLoaded).filter(isActive);
  }
  function getAppsToNotBootstrapped() {
      return appQueue.filter(isNotBootstrapped).filter(isActive);
  }
  function getAppsToUnmount() {
      return appQueue.filter(isMounting).filter(shouldnotBeActive);
  }
  function getAppsToMount() {
      return appQueue.filter(isUnmounted).filter(isActive);
  }

  function toLoadPromise(app) {
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
  function loadBundle(app) {
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

  function toUnmountPromise(app) {
      app.status = UNMOUNTING;
      try {
          return app.unmount();
      }
      catch (e) {
          console.log(e);
          app.status = SKIP_BECAUSE_BROKEN;
      }
  }

  function toBootstrapPromise(app) {
      app.status = BOOTSTRAPPING;
      try {
          return app.bootstrap();
      }
      catch (e) {
          console.log(e);
          app.status = SKIP_BECAUSE_BROKEN;
      }
  }

  function toMountPromise(app) {
      app.status = MOUNTING;
      try {
          return app.mount(app);
      }
      catch (e) {
          console.log(e);
          app.status = SKIP_BECAUSE_BROKEN;
      }
  }

  /**
   * @file
   * Created by zhangyatao on 2019/10/20.
   */
  let started = false;
  function start() {
      if (started) {
          return;
      }
      started = true;
      return invoke();
  }
  function isStarted() {
      return started;
  }

  // 队列函数
  function invoke() {
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

  function registerApplication(App) {
      // 不校验
      App.status = NOT_LOADED;
      appQueue.push(App);
      return invoke();
  }

  exports.registerApplication = registerApplication;
  exports.start = start;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-single-spa.js.map
