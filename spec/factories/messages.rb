FactoryGirl.define do
  factory :message do
    content { Faker::Lorem.paragraph }
    sect
  end
end
