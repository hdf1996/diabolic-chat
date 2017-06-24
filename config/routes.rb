Rails.application.routes.draw do
  root 'static#index'

  resources :chats, only: [:create]
end
