const notification = {
  title: '基本通知',
  body: '短消息部分'
}
const notificationButton = document.getElementById('basic-noti')

notificationButton.addEventListener('click', function () {
  const myNotification = new window.Notification(notification.title, notification)

  myNotification.onclick = () => {
    console.log('Notification clicked')
  }
})
