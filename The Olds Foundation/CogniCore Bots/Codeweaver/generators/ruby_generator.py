"""
Ruby Projects Generator
Author: Ashraf Siddiqui
GitHub: https://github.com/AshrafMorningstar
"""

from pathlib import Path
from .base_generator import BaseGenerator

class RubyGenerator(BaseGenerator):
    def get_language_name(self) -> str:
        return "Ruby"

    def generate_project(self, project_name: str) -> Path:
        return self._generate_sinatra_app()

    def _generate_sinatra_app(self) -> Path:
        project_path = self.create_project_structure('ruby', 'sinatra_web_app')

        app_content = f'''# {self.config["user"]["name"]}
# {self.config["user"]["github"]}

require 'sinatra'
require 'json'

set :port, 4567

get '/' do
  content_type :json
  {{ message: 'Sinatra Web App', author: '{self.config["user"]["name"]}', github: '{self.config["user"]["github"]}' }}.to_json
end

get '/hello/:name' do
  "Hello #{{params[:name]}}!"
end
'''

        gemfile = f'''source 'https://rubygems.org'

gem 'sinatra'
gem 'json'
'''

        self.file_manager.write_file(project_path / "app.rb", app_content)
        self.file_manager.write_file(project_path / "Gemfile", gemfile)

        self.add_readme(project_path, "Sinatra Web App", "A lightweight web application built with Sinatra.",
                       "1. bundle install\\n2. ruby app.rb", "Visit http://localhost:4567")
        self.add_license(project_path)
        self.add_gitignore(project_path, ['*.gem', '.bundle/', 'vendor/'])

        return project_path
