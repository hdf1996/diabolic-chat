class CreateMessage
  include Interactor

  def call
    context.message = Message.create!(message_params)
  end

  private

  def message_params
    context.params.require(:message).permit(:content)
           .merge(sect_id: context.params.fetch(:id))
           .merge(user_id: context.user_id)
  end
end
