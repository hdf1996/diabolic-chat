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

window.sendMessage = async (content, conversationId) => {
  var form = new FormData();
  form.append("message[content]", content);
  const response = await fetch(`/api/v1/sects/${conversationId}/chat`, {
    body: form,
    method: "POST",
    credentials: "same-origin"
  })
  const json = await (await response);
}

window.emojify = (content) => {
  return emojer(twemoji.parse(content), "<img src='https://github.global.ssl.fastly.net/images/icons/emoji/__EMOJI_NAME__.png?v5'>")
}

window.audio = (url) => {
  let audio = new Audio('http://soundbible.com/grab.php?id=1627&type=mp3');
  audio.play();
  return audio;
}

window.scream = () => {
  window.audio('http://soundbible.com/grab.php?id=1627&type=mp3');
}
