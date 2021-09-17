class ProductsController < ApplicationController
    # before_action :authorize, only: [:index, :show]
    # skip_before_action :verify_authenticity_token, only: [:create]

    def index
        products = Product.all
        render json: products
    end

    def show
        product = Product.find_by(id: params[:id])
        if product 
            render json: product
        else
            render json: {error: "Not Found"}, status: :not_found
       end
    end

    def create
        product = Product.create(products_params)
        if product.valid?
            session[:user_id] = product.id
            render json: product, status: :created
        else
            render json: { error: product.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        product = Product.find_by(id: params[:id])
       if product
            product.destroy
       else
            render json: {error: "Not Found"}, status: :not_found
       end
    end

    def update 
        product = Product.find_by(id: params[:id])
        if product
            product.update(product_params)
            render json: product, status: :accepted
        else 
            render json: { error: "Error Not Found" }, status: :not_found
        end
    end 
    
    private 
    
    def products_params
        params.permit(:name, :price, :image_url, :likes, :quantity, :user_id)
    end
end
