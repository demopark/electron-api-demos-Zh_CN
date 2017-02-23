const ipc = require('electron').ipcRenderer

const syncMsgBtn = document.getElementById('sync-msg')

syncMsgBtn.addEventListener('click', function () {
  const reply = ipc.sendSync('synchronous-message', 'ping')
  const message = `同步消息回复: ${reply}`
  document.getElementById('sync-reply').innerHTML = message
})
