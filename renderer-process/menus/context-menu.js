const ipc = require('electron').ipcRenderer

// 告诉主进程在单击示例按钮时显示菜单
const contextMenuBtn = document.getElementById('context-menu')
contextMenuBtn.addEventListener('click', function () {
  ipc.send('show-context-menu')
})
