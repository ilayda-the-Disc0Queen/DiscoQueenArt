class CreateArtworks < ActiveRecord::Migration[6.0]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :image
      t.string :date
      t.text :info

      t.timestamps
    end
  end
end
