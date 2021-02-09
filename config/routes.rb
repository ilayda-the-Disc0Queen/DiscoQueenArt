Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get '/artworks', to: 'artworks#index'
      post '/artworks', to: 'artworks#create'
      get '/artworks/:id', to: 'artworks#show'
      patch '/artworks/:id', to: 'artworks#update'
      delete '/artworks/:id', to: 'artworks#destroy'
    end
  end
end
