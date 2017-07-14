require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module DiabolicChat
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1
    config.action_cable.allowed_request_origins = ['https://diabolic.chat']

    config.generators do |g|
      g.skip_routes true
      %i(scaffold_stylesheet stylesheets javascripts helper route routes view_specs).each do |c|
        g.send(c, false)
      end
    end

  end
end
