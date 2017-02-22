const ipc = require('electron').ipcMain
const dialog = require('electron').dialog

ipc.on('open-error-dialog', function (event) {
  dialog.showErrorBox('一条错误信息', '错误消息演示.')
})
