class Sect < ApplicationRecord
  has_many :sect_subscriptions
  has_many :users, through: :sect_subscriptions

  validates :name, presence: true
end
