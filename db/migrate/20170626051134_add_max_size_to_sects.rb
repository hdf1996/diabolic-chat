class AddMaxSizeToSects < ActiveRecord::Migration[5.1]
  def change
    add_column :sects, :max_size, :integer, default: 10
  end
end
