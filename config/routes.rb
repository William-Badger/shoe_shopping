Rails.application.routes.draw do
  resource :users, only: [:create, :destroy]
  resource :products
  resource :reviews
  resource :brands, only: [:index]

  post '/login', to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post '/signup', to: 'users#create'

  get '/me', to: 'users#show'
end
