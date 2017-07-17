module Api
  module V1
    class SectsController < ApplicationController
      before_action :authenticate_user!, only: %i[subscribe chat]
      before_action :set_sect, only: [:subscribe]

      def index
        render json: Sect.all.order(id: :asc)
      end

      def chat
        SendMessage.call(params: params, user_id: current_user.id)
        head :ok
      end

      def messages
        render json: Sect.find(params[:id]).messages.order(:id).limit(10)
      end

      def subscribe
        SectSubscription.create!(user: current_user, sect: @sect)
        head :created
      rescue
        head :not_acceptable
      end

      private

      def set_sect
        @sect ||= Sect.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        head :not_found
      end
    end
  end
end
