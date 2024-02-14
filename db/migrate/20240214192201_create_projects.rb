class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :descripton
      t.string :img_url
      t.string :info
      t.string :stack
      t.string :video_url
      t.string :gh_url

      t.timestamps
    end
  end
end
