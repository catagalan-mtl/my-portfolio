class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
    @contribute = @project.contribute
    # raise
    # @contribute.each do |name, gh|
    #   @name = name
    #   @gh = gh
    # end
  end
end
