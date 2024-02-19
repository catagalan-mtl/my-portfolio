class RemoveCollabFromProjects < ActiveRecord::Migration[7.0]
  def change
    remove_column :projects, :collab, :string
  end
end
