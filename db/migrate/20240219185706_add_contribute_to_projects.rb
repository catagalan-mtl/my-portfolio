class AddContributeToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :contribute, :text
  end
end
