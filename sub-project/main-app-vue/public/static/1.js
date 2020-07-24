var option1 = {
  appName: "vue1", // 独一无二的
  bootstrap: () => {
    console.log("bootstrap vue1");
    return Promise.resolve(1)
  },
  mount: () => {
    console.log("mount vue1");
    return Promise.resolve(1)
  },
  unmount: () => {
    console.log("unmount vue1");
    return Promise.resolve(1)
  }
};

loaderApp(option1);
function loaderApp(option) {
  let { appName, ...args } = option;
  window["wbChildTasks"] = window["wbChildTasks"] || [];
  window["wbChildTasks"].push([appName, { ...args }]);
}
