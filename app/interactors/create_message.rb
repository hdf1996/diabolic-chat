class CreateMessage
  include Interactor

  def call
    context.message = Message.create!(message_params)
  end

  private

  def message_params
    context.params.require(:message).permit(:content, :user_id)
           .merge(sect_id: context.params.fetch(:id))
    # TODO: Here we need to add the current user
  end
end
