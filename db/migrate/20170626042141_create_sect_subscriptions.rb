class CreateSectSubscriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :sect_subscriptions do |t|
      t.references :sect, foreign_key: true
      t.references :user, foreign_key: true
      t.integer :role, default: 0, null: false

      t.timestamps
    end
  end
end
