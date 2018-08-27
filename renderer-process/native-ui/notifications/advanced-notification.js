const path = require('path')

const notification = {
  title: '附带图像的通知',
  body: '短消息附带自定义图片',
  icon: path.join(__dirname, '../../../assets/img/programming.png')
}
const notificationButton = document.getElementById('advanced-noti')

notificationButton.addEventListener('click', () => {
  const myNotification = new window.Notification(notification.title, notification)

  myNotification.onclick = () => {
    console.log('通知被点击')
  }
})
