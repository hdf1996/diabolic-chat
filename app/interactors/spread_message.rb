class SpreadMessage
  include Interactor

  def call
    ActionCable.server.broadcast(
      "#{context.message.sect_id}_room",
      sent_by: 'H', # context.message.user,
      body: context.message.content,
      user_id: 1
    )
  end
end
