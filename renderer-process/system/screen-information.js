const electronScreen = require('electron').screen

const screenInfoBtn = document.getElementById('screen-info')
const size = electronScreen.getPrimaryDisplay().size

screenInfoBtn.addEventListener('click', function () {
  const message = `当前屏幕是: ${size.width}px x ${size.height}px`
  document.getElementById('got-screen-info').innerHTML = message
})
