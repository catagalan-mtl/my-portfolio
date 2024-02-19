class RemoveContibuteFromProjects < ActiveRecord::Migration[7.0]
  def change
    remove_column :projects, :contibute, :string
  end
end
