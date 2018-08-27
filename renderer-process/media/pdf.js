const {ipcRenderer} = require('electron')

const printPDFBtn = document.getElementById('print-pdf')

printPDFBtn.addEventListener('click', (event) => {
  ipcRenderer.send('print-to-pdf')
})

ipcRenderer.on('wrote-pdf', (event, path) => {
  const message = `PDF 保存到: ${path}`
  document.getElementById('pdf-path').innerHTML = message
})
