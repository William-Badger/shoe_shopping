class BrandsController < ApplicationController

    def index
        brands = Brand.all
        render json: brands
    end

    def show
        brand = Brand.find_by(id: params[:id])
        render json: brand
    end

end
