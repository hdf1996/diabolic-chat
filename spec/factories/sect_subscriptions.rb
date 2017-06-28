FactoryGirl.define do
  factory :sect_subscription do
    sect
    user
    role { SectSubscription.roles.keys.sample }
  end
end
