class CreateSects < ActiveRecord::Migration[5.1]
  def change
    create_table :sects do |t|
      t.string :name

      t.timestamps
    end
  end
end
