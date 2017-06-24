Rails.application.routes.draw do
  root 'static#index'

  resources :chat, only: [:index]
end
