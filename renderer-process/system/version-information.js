const versionInfoBtn = document.getElementById('version-info')

const electronVersion = process.versions.electron

versionInfoBtn.addEventListener('click', () => {
  const message = `当前应用正在使用的 Electron 版本: ${electronVersion}`
  document.getElementById('got-version-info').innerHTML = message
})
