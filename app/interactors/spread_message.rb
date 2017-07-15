class SpreadMessage
  include Interactor

  def call
    ActionCable.server.broadcast(
      "#{context.message.sect_id}_room",
      sent_by: context.message.user.username,
      body: context.message.content,
      user_id: context.message.user_id
    )
  end
end
