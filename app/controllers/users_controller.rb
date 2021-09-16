class UsersController < ApplicationController
    before_action :authorize, only: [:index, :show]
    skip_before_action :verify_authenticity_token, only: [:create]

    def index
        @users = User.all
            if @users
                render json: {
                    users: @users
                }
            else
                render json: {
                    status: 500,
                    errors: ['no users found']
                }
            end
    end

    def create
        byebug
        user = User.create!(users_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        @user = User.find_by(id: session[:user_id])
        if user
        render json: {
            user: @user
        }
        else
            render json: {
                status: 500,
                errors: ['user not found']
            }
        end
      end

    def destroy
        user = User.find_by(user_id: params[:user_id])
        if user
            user.destroy
            head :no_content
        else
            render json: {error: "Not Found"}, status: :not_found
        end
    end

    private 

    def users_params
        
        params.permit(:name, :email, :password_digest, :is_seller)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
