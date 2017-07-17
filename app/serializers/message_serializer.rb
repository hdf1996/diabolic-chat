class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :username

  def username
    object.user.username
  end
end
