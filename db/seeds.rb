# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Artwork.destroy_all
require 'faker'

puts "Creating artworks..."
10.times do
  Artwork.create(
    #image: File.open(Rails.root.join('public', 'images', 'atlantis_masks.jpg')),
    title: Faker::Movies::StarWars.planet,
    date: Faker::Date.between_except(from: 2.year.ago, to: 1.year.from_now, excepted: Date.today),
    info: Faker::Lorem.paragraph(sentence_count: 2)
  )
end
puts "Done!"
