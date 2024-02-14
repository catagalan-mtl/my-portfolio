class RenameProjectDescription < ActiveRecord::Migration[7.0]
  def change
    rename_column :projects, :descripton, :description
  end
end
