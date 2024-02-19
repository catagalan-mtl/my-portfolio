class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
    @contribute = @project.contribute
    @stack = @project.stack.split(', ')
  end
end
