class RemoveCreditFromProjects < ActiveRecord::Migration[7.0]
  def change
    remove_column :projects, :credit, :string
  end
end
