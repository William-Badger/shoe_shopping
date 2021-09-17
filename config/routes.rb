Rails.application.routes.draw do
  resources :users
  resources :products
  resources :reviews


  post '/login', to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post '/signup', to: 'users#create'

  delete '/users/:id', to: 'users#destroy'

  get '/me', to: 'users#show'
  get '/test', to: 'users#testing'
end
