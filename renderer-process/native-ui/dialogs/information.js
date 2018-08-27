const {ipcRenderer} = require('electron')

const informationBtn = document.getElementById('information-dialog')

informationBtn.addEventListener('click', (event) => {
  ipcRenderer.send('open-information-dialog')
})

ipcRenderer.on('information-dialog-selection', (event, index) => {
  let message = '你已选择 '
  if (index === 0) message += '是.'
  else message += '否.'
  document.getElementById('info-selection').innerHTML = message
})
