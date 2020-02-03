Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :shops, only: [:create, :show, :edit, :destroy, :update] 
    get "owner/:owner_id/shops", to: "shops#index"
  end

  root "static_pages#root"  
end
