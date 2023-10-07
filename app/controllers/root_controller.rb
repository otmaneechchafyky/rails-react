class RootController < ApplicationController
    def index
      random_greeting = Greeting.order('RANDOM()').first
      render plain: random_greeting.message
    end
end