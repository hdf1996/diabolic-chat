class Sect < ApplicationRecord
  has_many :sect_subscriptions
  has_many :users, through: :sect_subscriptions

  validates :name, presence: true
  validate :limit_reached

  def limit_reached
    errors.add('users.limit_reached') if users.count >= max_size
  end
end
