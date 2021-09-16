Rails.application.routes.draw do
  resources :users, only: [:create, :destroy]
  resources :products
  resources :reviews


  post '/login', to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post '/users', to: 'users#create'

  get '/me', to: 'users#show'
end
