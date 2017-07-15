Rails.application.routes.draw do
  devise_for :users
  root 'static#index'

  # Watermelon here
  # We will need to kill this routes in the future
  resources :users, only: [:create]
  # Watermelon out

  authenticate :user do
    resources :chats, only: [:index]
  end
  namespace :api do
    namespace :v1 do
      resources :sects, only: [:index] do
        member do
          post :subscribe
          post :chat
        end
      end

      resources :users, only: [:create] do
        collection do
          put :authenticate

          get :me
        end
      end
    end
  end
end
