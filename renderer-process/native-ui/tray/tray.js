const ipc = require('electron').ipcRenderer

const trayBtn = document.getElementById('put-in-tray')
let trayOn = false

trayBtn.addEventListener('click', function (event) {
  if (trayOn) {
    trayOn = false
    document.getElementById('tray-countdown').innerHTML = ''
    ipc.send('remove-tray')
  } else {
    trayOn = true
    const message = '再次点击示例按钮移除托盘.'
    document.getElementById('tray-countdown').innerHTML = message
    ipc.send('put-in-tray')
  }
})
// 从图标上下文菜单中删除托盘
ipc.on('tray-removed', function () {
  ipc.send('remove-tray')
  trayOn = false
  document.getElementById('tray-countdown').innerHTML = ''
})
