class Api::ShopsController < ApplicationController
    def index
        @shops = Shop.where(:owner_id => params[:owner_id])
        
        render :index
    end

    def show
        @shop = Shop.find(params[:id])

        render :show
    end

    def create
        @shop = Shop.new(shop_params)

        if @shop.save
            render :show
        else
            render json: @shop.errors.full_messages, status: 422
        end
    end

    def destroy
        @shop = Shop.find(params[:id])
        @shop.destroy

        render :show
    end

    private
    def shop_params
        params.require(:shop).permit(:title, :owner_id)
    end
end
