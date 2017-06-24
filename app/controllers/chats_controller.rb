class ChatsController < ApplicationController
  def create
    ActionCable.server.broadcast(
      "chat_room",
      sent_by: 'Paul',
      body: 'This is a cool chat app.'
    )
    head :ok
  end
end