const ipc = require('electron').ipcMain
const dialog = require('electron').dialog

ipc.on('open-information-dialog', function (event) {
  const options = {
    type: 'info',
    title: '信息',
    message: "这是一个信息对话框. 很不错吧？",
    buttons: ['是', '否']
  }
  dialog.showMessageBox(options, function (index) {
    event.sender.send('information-dialog-selection', index)
  })
})
