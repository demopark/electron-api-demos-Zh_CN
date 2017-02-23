const app = require('electron').app
const dialog = require('electron').dialog

app.setAsDefaultProtocolClient('electron-api-demos')

app.on('open-url', function (event, url) {
  dialog.showErrorBox('欢迎回来', `你来自: ${url}`)
})
