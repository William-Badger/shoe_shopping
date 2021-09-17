class ReviewsController < ApplicationController

    def index
        render json: currentUser.reviews
    end

    def show
        review = Review.find_by(id: params[:id])
        if review
            render json: review
        else
            render json: {error: "Not Found"}, status: :not_found
        end
    end

    def create
        review = Review.create!(reviews_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: { error: product.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        review = Review.find_by(id: params[:id])
        if review
            review.destroy
            head :no_content
        else
            render json: {error: "Not Found"}, status: :not_found
        end

    def update 
        review = Review.find_by(id: params[:id])
        if review
            review.update(review_params)
            render json: review, status: :accepted
        else 
            render json: { error: "Error Not Found" }, status: :not_found
        end
    end 

    end
    

    private 

    def reviews_params
        params.permit(:comment)
    end
end
