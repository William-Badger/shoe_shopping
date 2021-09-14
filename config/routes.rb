Rails.application.routes.draw do
  resources :users, only: [:create, :destroy]
  resources :products
  resources :reviews
  resources :brands, only: [:index]


  post '/login', to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post '/signup', to: 'users#create'

  get '/me', to: 'users#show'
end
