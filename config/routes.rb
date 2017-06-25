Rails.application.routes.draw do
  devise_for :users
  root 'static#index'

  resources :chats, only: [:create]
end
