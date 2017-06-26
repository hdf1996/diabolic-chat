class SectSubscription < ApplicationRecord
  belongs_to :sect
  belongs_to :user

  validates :role, presence: true, inclusion: { in: 0..1 }
  validates :user_id, uniqueness: { scope: :sect_id }
  validate :sect_limit_reached

  delegate :limit_reached, to: :sect, prefix: true

  enum roles: { user: 0, admin: 1 }
end
