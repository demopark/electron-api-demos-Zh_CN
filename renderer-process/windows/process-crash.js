const BrowserWindow = require('electron').remote.BrowserWindow
const dialog = require('electron').remote.dialog

const path = require('path')

const processCrashBtn = document.getElementById('process-crash')

processCrashBtn.addEventListener('click', function (event) {
  const crashWinPath = path.join('file://', __dirname, '../../sections/windows/process-crash.html')
  let win = new BrowserWindow({ width: 400, height: 320 })

  win.webContents.on('crashed', function () {
    const options = {
      type: 'info',
      title: '渲染器进程崩溃',
      message: '这个进程已经崩溃.',
      buttons: ['重载', '关闭']
    }
    dialog.showMessageBox(options, function (index) {
      if (index === 0) win.reload()
      else win.close()
    })
  })

  win.on('close', function () { win = null })
  win.loadURL(crashWinPath)
  win.show()
})
