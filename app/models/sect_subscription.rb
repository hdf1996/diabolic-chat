class SectSubscription < ApplicationRecord
  belongs_to :sect
  belongs_to :user

  validates :role, presence: true, inclusion: { in: 0..1 }

  enum roles: { user: 0, admin: 1 }
end
