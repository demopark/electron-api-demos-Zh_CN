const ipc = require('electron').ipcMain
const dialog = require('electron').dialog

ipc.on('save-dialog', function (event) {
  const options = {
    title: '保存图片',
    filters: [
      { name: 'Images', extensions: ['jpg', 'png', 'gif'] }
    ]
  }
  dialog.showSaveDialog(options, function (filename) {
    event.sender.send('saved-file', filename)
  })
})
