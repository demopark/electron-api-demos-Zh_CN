const ipc = require('electron').ipcRenderer

const saveBtn = document.getElementById('save-dialog')

saveBtn.addEventListener('click', function (event) {
  ipc.send('save-dialog')
})

ipc.on('saved-file', function (event, path) {
  if (!path) path = '无路径'
  document.getElementById('file-saved').innerHTML = `选择的路径: ${path}`
})
