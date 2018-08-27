const os = require('os')
const homeDir = os.homedir()

const sysInfoBtn = document.getElementById('sys-info')

sysInfoBtn.addEventListener('click', () => {
  const message = `当前系统主目录是: ${homeDir}`
  document.getElementById('got-sys-info').innerHTML = message
})
