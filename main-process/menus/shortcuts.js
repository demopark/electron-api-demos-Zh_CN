const {app, dialog, globalShortcut} = require('electron')

app.on('ready', () => {
  globalShortcut.register('CommandOrControl+Alt+K', () => {
    dialog.showMessageBox({
      type: 'info',
      message: '成功!',
      detail: '你按下了一个全局注册的快捷键绑定.',
      buttons: ['好的']
    })
  })
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})
