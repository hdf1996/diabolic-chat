class Sect < ApplicationRecord
  has_many :sect_subscriptions
  has_many :users, through: :sect_subscriptions
  has_many :messages, dependent: :destroy

  validates :name, presence: true
  validate :limit_reached

  enum type: { Channel: 0 }

  def limit_reached
    errors.add('users.limit_reached') if users.count >= max_size
  end

end
