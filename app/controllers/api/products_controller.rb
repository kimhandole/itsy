class Api::ProductsController < ApplicationController
    def all
        @products = Product.all

        render :index
    end

    def index
        @products = Product.where(:shop_id => params[:shop_id])
        
        render :index
    end

    def show
        @product = Product.find(params[:id])

        render :show
    end

    def category
        @products = Product.where(:category_id => params[:category_id])

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

    def search 
        search_query = params[:query].downcase 
        @products = Product.all.select do |product|
            title = product.title.downcase
            shop = product.shop.title.downcase
            (title.include?(search_query) || shop.include?(search_query))
        end

        render :index
    end

    private
    def product_params
        params.require(:product).permit(:title, :shop_id, :description, :product_type, :who, :what, :when, :price, :quantity, :category_id, photo: [])
    end
end
