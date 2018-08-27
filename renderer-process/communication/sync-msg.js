const {ipcRenderer} = require('electron')

const syncMsgBtn = document.getElementById('sync-msg')

syncMsgBtn.addEventListener('click', () => {
  const reply = ipcRenderer.sendSync('synchronous-message', 'ping')
  const message = `同步消息回复: ${reply}`
  document.getElementById('sync-reply').innerHTML = message
})
