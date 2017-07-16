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
