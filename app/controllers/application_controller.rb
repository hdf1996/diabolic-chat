class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  private

  def current_user
    @current_user = User.find_by(access_token: params[:access_token])
  end

  def authenticate_user!
    head :unauthorized if current_user.nil?
  end
end
