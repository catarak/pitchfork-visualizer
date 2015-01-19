require 'open-uri'
require 'json'

class Api::ArtistsController < ApplicationController
  def index
    response = open("https://api.morph.io/catarak/pitchfork_review_data/data.json?key=#{ENV['morphio_api_key']}&query=select%20*%20from%20%27data%27%20where%20artist%20%3D%20%22Bj%C3%B6rk%22%20order%20by%20publish_date%20asc").read
    songs = JSON.parse(response)
    render json: songs
  end
end
