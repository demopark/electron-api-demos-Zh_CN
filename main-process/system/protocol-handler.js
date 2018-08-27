const {app, dialog} = require('electron')

app.setAsDefaultProtocolClient('electron-api-demos')

app.on('open-url', (event, url) => {
  dialog.showErrorBox('欢迎回来', `您来自: ${url}`)
})
