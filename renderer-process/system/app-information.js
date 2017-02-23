const ipc = require('electron').ipcRenderer

const appInfoBtn = document.getElementById('app-info')

appInfoBtn.addEventListener('click', function () {
  ipc.send('get-app-path')
})

ipc.on('got-app-path', function (event, path) {
  const message = `当前应用程序位于: ${path}`
  document.getElementById('got-app-info').innerHTML = message
})
