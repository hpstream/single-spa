import * as singleSpa from "single-spa"; //导入single-spa
import mainRunScript from "./mainRunScript";
/*
 * runScript：一个promise同步方法。可以代替创建一个script标签，然后加载服务
 * */
// const runScript = async url => {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = url;
//     script.onload = resolve;
//     script.onerror = reject;
//     const firstScript = document.getElementsByTagName("script")[0];
//     firstScript.parentNode.insertBefore(script, firstScript);
//   });
// };

singleSpa.registerApplication(
  //注册微前端服务
  "singleDemo",
  async () => {
    // 注册用函数，
    // return 一个singleSpa 模块对象，模块对象来自于要加载的js导出
    // 如果这个函数不需要在线引入，只需要本地引入一块加载：
    // () => import('xxx/main.js')
    var data = await mainRunScript("http://localhost:8080/static/1.js", "vue1");
    console.log(data);
    return data;
  },
  location => location.pathname === "/vue" // 配置微前端模块前缀
);
singleSpa.registerApplication(
  //注册微前端服务
  "singleDemo3",
  async () => {
    // 注册用函数，
    // return 一个singleSpa 模块对象，模块对象来自于要加载的js导出
    // 如果这个函数不需要在线引入，只需要本地引入一块加载：
    // () => import('xxx/main.js')
    var data = await mainRunScript("http://localhost:8080/static/2.js", "vue2");
    return data;
  },
  location => location.pathname === "/vue3" // 配置微前端模块前缀
);

singleSpa.start(); // 启动
