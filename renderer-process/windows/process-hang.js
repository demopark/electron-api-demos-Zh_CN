const {BrowserWindow, dialog} = require('electron').remote
const path = require('path')

const processHangBtn = document.getElementById('process-hang')

processHangBtn.addEventListener('click', (event) => {
  const hangWinPath = path.join('file://', __dirname, '../../sections/windows/process-hang.html')
  let win = new BrowserWindow({ width: 400, height: 320 })

  win.on('unresponsive', () => {
    const options = {
      type: 'info',
      title: '渲染器进程挂起',
      message: '这个进程已经被挂起.',
      buttons: ['重载', '关闭']
    }

    dialog.showMessageBox(options, (index) => {
      if (index === 0) win.reload()
      else win.close()
    })
  })

  win.on('close', () => { win = null })
  win.loadURL(hangWinPath)
  win.show()
})
