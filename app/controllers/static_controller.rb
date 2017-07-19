class StaticController < ApplicationController
  def index
    if user_signed_in?
      redirect_to chats_path
    else
      render :index
    end
  end

  def teapot; end
end
