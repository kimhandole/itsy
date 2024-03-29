Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]

    # resources :categories, only: [:show, :index]

    resources :shops, only: [:create, :show, :edit, :destroy, :update] do
      resources :products, only: [:create, :index]
    end

    get "owner/:owner_id/shops", to: "shops#index"
    get "/products/search", to: "products#search"
    resources :products, only: [:show, :update, :destroy]
    get "products", to: "products#all"
    
    get "category/:category_id", to: "products#category"
    resources :shopping_cart_items, only: [:index, :create, :update, :destroy]

  end

  root "static_pages#root"  
end
