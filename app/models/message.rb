class Message < ApplicationRecord
  belongs_to :sect
  belongs_to :user

  validates :content, :sect, presence: true
end
