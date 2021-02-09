module Api::V1
  class ArtworksController < ApplicationController
    def index
      @artworks = Artwork.all
      render json: @artworks
    end

    def show
      @artworks = Artwork.find(params[:id])
      render json: @artworks
    end

    def create
      @artworks = Artwork.new(artwork_params)

      if @artworks.save
        render json: @artworks, status: :created
      else
        render json: @artworks.errors, status: :unprocessable_entity
      end
    end

    def update
      @artworks = Artwork.find(params[:id])
      if @artworks.update(job_params)
        render json: @artworks
      else
        render json: @artworks.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @artworks = Artwork.find(params[:id])
      @artworks.destroy
    end

    ###############################################################
    private

    def artwork_params
      params
          .require(:artwork)
          .permit(:title, :image, :date, :info)
    end
  end
end
