require 'rails_helper'

RSpec.describe Sect, type: :model do
  subject { build :sect }

  it { should validate_presence_of(:name) }
end
