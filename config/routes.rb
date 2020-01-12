Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resource :shop, only: [:index, :create, :show, :edit, :show]
  end

  root "static_pages#root"  
end
