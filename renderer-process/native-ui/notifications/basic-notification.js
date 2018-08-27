const notification = {
  title: '基本通知',
  body: '简短的通知内容'
}

const notificationButton = document.getElementById('basic-noti')

notificationButton.addEventListener('click', () => {
  const myNotification = new window.Notification(notification.title, notification)

  myNotification.onclick = () => {
    console.log('通知被点击')
  }
})
