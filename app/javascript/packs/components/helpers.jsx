const emojer = require('emojer')
window.sendNotification = (message) => {
  return new Notification(message);
}

window.watermelon = () => {
  alert('🍉')
}

window.changeConversationId = (id = -1) => {
  window.appComponent.setState({
    currentConversationId: id
  })
}

window.emojify = (content) => {
  return emojer(content, "<img src='https://github.global.ssl.fastly.net/images/icons/emoji/__EMOJI_NAME__.png?v5'>")
}
