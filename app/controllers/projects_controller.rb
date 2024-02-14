class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
    @info = @project.info
    @video_url = @project.video_url
  end
end
