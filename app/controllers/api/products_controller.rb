class Api::ProductsController < ApplicationController
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
        params.require(:product).permit(:title, :shop_id, :description, :product_type, :who, :what, :when, :price, :quantity, :category_id)
    end
end