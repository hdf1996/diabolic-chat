class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :recoverable, :rememberable,
         :trackable, :validatable
  has_many :sect_subscriptions
  has_many :sects, through: :sect_subscriptions

  def generate_access_token
    self.access_token = SecureRandom.hex(16)
  end
end
