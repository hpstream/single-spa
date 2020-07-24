/**
 * [description] 加载子工程 
 */
// option = {
//   name,
//   bootstrap,
//   mount,
//   unmont,
// }
function loaderApp(option) {
  let { appName,...args} = option;
  window['wbChildTasks'] = window['wbChildTasks'] || [];
  window['wbChildTasks'].push([
      appName,
      { ...args}
    ])
}

export default loaderApp;