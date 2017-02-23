const clipboard = require('electron').clipboard

const pasteBtn = document.getElementById('paste-to')

pasteBtn.addEventListener('click', function () {
  clipboard.writeText('一段示例内容!')
  const message = `粘贴的内容: ${clipboard.readText()}`
  document.getElementById('paste-from').innerHTML = message
})
