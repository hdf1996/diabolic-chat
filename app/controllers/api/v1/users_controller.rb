module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_user!, only: [:me]

      def create
        user = User.new(user_params)
        if user.save
          render json: user, status: :created
        else
          render json: user.errors, status: :bad_request
        end
      end

      def me
        render json: current_user
      end

      private

      def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
      end
    end
  end
end
