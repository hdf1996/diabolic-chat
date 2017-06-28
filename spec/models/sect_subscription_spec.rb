require 'rails_helper'

RSpec.describe SectSubscription, type: :model do
  subject { build :sect_subscription }

  it { should validate_presence_of :role }
  it { should validate_inclusion_of(:role).in_array(described_class.roles.values) }
end
