class ApplicationController < ActionController::Base
    include ActionController::Cookies
    skip_before_action :verify_authenticity_token

    def currentUser
        User.find_by(id: session[:user_id])
    end

    before_action :authorize
  #   rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  private

  def authorize
    render json: { errors: ["Not authorized"] }, status:
    :unauthorized unless session.include? :user_id
  end

  # def findUser
  #   @current_user = User.find_by(id: session[:user_id])
  #   render json: @current_user
  # end

  # def render_unprocessable_entity_response(invalid)
  #   render json: { errors: invalid.record.errors.full_messages },
  #   status: :unprocessable_entity
  # end
end
