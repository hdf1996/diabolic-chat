class AddTypeToSects < ActiveRecord::Migration[5.1]
  def change
    add_column :sects, :type, :integer
  end
end
