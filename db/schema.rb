# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170706020140) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contents", force: :cascade do |t|
    t.bigint "sect_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["sect_id"], name: "index_contents_on_sect_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "content"
    t.bigint "sect_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["sect_id"], name: "index_messages_on_sect_id"
  end

  create_table "sect_subscriptions", force: :cascade do |t|
    t.bigint "sect_id"
    t.bigint "user_id"
    t.integer "role", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["sect_id"], name: "index_sect_subscriptions_on_sect_id"
    t.index ["user_id"], name: "index_sect_subscriptions_on_user_id"
  end

  create_table "sects", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "max_size", default: 10
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "nickname"
    t.string "avatar"
    t.string "access_token"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "contents", "sects"
  add_foreign_key "messages", "sects"
  add_foreign_key "sect_subscriptions", "sects"
  add_foreign_key "sect_subscriptions", "users"
end
