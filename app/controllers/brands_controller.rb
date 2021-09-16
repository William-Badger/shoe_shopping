class BrandsController < ApplicationController
    before_action :authorize, only: [:index, :show]

    def index
        brands = Brand.all
        render json: brands
    end

    def show
        brand = Brand.find_by(id: params[:id])
        render json: brand
    end

end
