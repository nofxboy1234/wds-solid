require './swimmable'

class Fish
  include Swimmable
end

fish = Fish.new
fish.swim
# Fish.hello
Swimmable.hello
