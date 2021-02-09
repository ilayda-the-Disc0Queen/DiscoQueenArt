require 'faker'

task seed_artworks: :environment do
  puts "Creating artworks..."
  10.times do
    Artwork.create(
      image: Faker::Avatar.image,
      title: Faker::Movies::StarWars.planet,
      date: Faker::Date.between_except(from: 2.year.ago, to: 1.year.from_now, excepted: Date.today),
      info: Faker::Lorem.paragraph(sentence_count: 2)
    )
  end
  puts "Done!"
end
