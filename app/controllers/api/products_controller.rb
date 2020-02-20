class Api::ProductsController < ApplicationController
    def all
        @products = Product.all

        render :index
    end

    def index
        @products = Product.where(:shop_id => params[:shop_id])
        
        render :index
    end

    def create
        @product = Product.new(product_params)

        if @product.save
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    private
    def product_params
        params.require(:product).permit(:title, :shop_id, :description, :product_type, :who, :what, :when, :price, :quantity, :category_id, :photo)
    end
end
