class AddCreditsToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :credits, :string
  end
end
