class AddTaglineToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :tagline, :string
  end
end
