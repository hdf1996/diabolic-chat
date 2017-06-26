module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_user!, only: [:me]

      def create
        user = User.new(user_params)
        user.generate_access_token
        if user.save
          render json: user, status: :created
        else
          render json: user.errors, status: :bad_request
        end
      end

      def me
        render json: current_user
      end

      def authenticate
        User.find_by!(email: user_params[:email]).tap do |u|
          raise ActiveRecord::RecordNotFound unless u.valid_password? user_params[:password]
          render json: {
            access_token: u.access_token
          }
        end
      rescue
        head :unauthorized
      end

      private

      def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
      end
    end
  end
end
