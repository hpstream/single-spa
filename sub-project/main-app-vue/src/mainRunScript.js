var loadedApp = {};
var wbChildTasks = (window.wbChildTasks = window.wbChildTasks || []);
var oldPush = wbChildTasks.push;
wbChildTasks.push = function(option) {
  var [name, config] = option;
  if (loadedApp[name]) {
    loadedApp[name](config);
    loadedApp[name] = config;
  }
  oldPush.call(this, option);
};

const runScript = async (url, name) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    loadedApp[name] = resolve;
    script.onerror = reject;
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  });
};
export default runScript;
