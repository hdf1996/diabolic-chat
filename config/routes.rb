Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: :registrations
  }
  root 'static#index'
  get :teapot, to: 'static#teapot'

  namespace :api do
    namespace :v1 do
      resources :sects, only: [:index] do
        member do
          post :subscribe
          post :chat
          get :messages
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
