class SendMessage
  include Interactor::Organizer

  organize CreateMessage, SpreadMessage
end
