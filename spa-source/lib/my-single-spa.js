(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.mySingleSpa = {}));
}(this, (function (exports) { 'use strict';

    // 未加载
    const NOT_LOADED = 'NOT_LOADED';

    function registerApplication(option) {
        // 不校验
        option.status = NOT_LOADED;
    }

    exports.registerApplication = registerApplication;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-single-spa.js.map
