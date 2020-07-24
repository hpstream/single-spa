var option2 = {
  appName: "vue2", // 独一无二的
  bootstrap: async() => {
    console.log("bootstrap vue2");
    return Promise.resolve(1)
  },
  mount: async() => {
    console.log("mount vue2");
    return Promise.resolve(1)
  },
  unmount:  () => {
    console.log("unmount vue2"); 
    return Promise.resolve(1)
  }
};

loaderApp(option2);
function loaderApp(option) {
  let { appName, ...args } = option;
  window["wbChildTasks"] = window["wbChildTasks"] || [];
  window["wbChildTasks"].push([appName, { ...args }]);
}
