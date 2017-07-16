FactoryGirl.define do
  factory :sect do
    name { Faker::Name.first_name }
    max_size { 10 }
    type { :Channel }
  end
end
