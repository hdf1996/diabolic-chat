class CreateContents < ActiveRecord::Migration[5.1]
  def change
    create_table :contents do |t|
      t.references :sect, foreign_key: true

      t.timestamps
    end
  end
end
