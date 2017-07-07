class Message < ApplicationRecord
  belongs_to :sect

  validates :content, :sect, presence: true
end
