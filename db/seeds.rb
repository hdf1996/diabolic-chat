Sect.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('sects')
FactoryGirl.create_list(:sect, 4)
