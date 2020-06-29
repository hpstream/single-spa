
// 未加载
export const NOT_LOADED = 'NOT_LOADED';
// 加载app代码中
export const LOAD_RESOURCE_CODE = 'LOAD_RESOURCE_CODE';
// 加载成功，但为启动
export const NOT_BOOTSTRAPPED = 'NOT_BOOTSTRAPPED';
// 启动中
export const BOOTSTRAPPING = 'BOOTSTRAPPING';
// 启动成功，未挂载
export const NOT_MOUNTED = 'NOT_MOUNTED';
// 挂载中
export const MOUNTING = 'MOUNTING';
// 挂载成功
export const MOUNTED = 'MOUNTED';
// 卸载中
export const UNMOUNTING = 'UNMOUNTING';
// 加载时参数校验未通过，或非致命错误
export const SKIP_BECAUSE_BROKEN = 'SKIP_BECAUSE_BROKEN';
// 加载时遇到致命错误
export const LOAD_ERROR = 'LOAD_ERROR';
// 更新service中
export const UPDATING = 'UPDATING';


export function loadBundle(url:string) {
    return new Promise((reslove,reject)=>{
        var script =  document.createElement('script')
        script.src = url;
        script.onload = reslove
        script.onerror = reject;
    })
}