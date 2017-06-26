Rails.application.routes.draw do
  devise_for :users
  root 'static#index'

  resources :chats, only: [:create]
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create] do
        collection do
          put :authenticate

          get :me
        end
      end
    end
  end
end
