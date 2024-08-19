puts "destroying projects..."

Project.destroy_all

puts "seeding projects..."

puts "creating FrontRow...  "
frontrow = Project.new(
  name: "FrontRow",
  description: "Social platform for concert goers.",
  img_url: "frontrow-banner",
  info:
   "Frontrow is a social platform where fans can find, rate and review concerts, as well as interact, follow and connect with other fans. This was the final team project at Le Wagon bootcamp. It was developed in a two week sprint. As a participant in this project I collaborated in building the back end and the database, created front end elements and implemented the chat feature in its entirety.",
  stack:
   "Ruby on Rails, HTML5, SCSS, Bootstrap, JavaScript, Stimulus, Webpack, PostgreSQL, Websocket, Claudinary, Heroku",
  video_url: "frontrow-demo.mp4",
  gh_url: "https://github.com/catagalan-mtl/frontrow-cat",
  contribute: {
    "Antoine S Marchand"=>"https://github.com/antmarchand",
    "Kirstin Penzes"=>"https://gith\nub.com/KPenzes",
    "Sofia D."=>"https://github.com/daouasof"
    },
  tagline: "The concert starts here...")

frontrow.save!

puts "creating Pawsh...  "

pawsh = Project.new(name: "Pawsh",
description: "Marketplace for renting pet outfits.",
img_url: "pawsh-landing",
info:
 "Pawsh is an \"airbnb clone\" app where users you can post, search and rent pet outfits. This project was the first of Le Wagon team projects, developed in one week time. I worked on frontend as well as backend for various features.",
stack:
 "Ruby on Rails, HTML5, SCSS, Bootstrap, JavaScript, Stimulus, Webpack, PostgreSQL, Websocket, Claudinary, Heroku",
video_url: "pawsh-demo.mp4",
gh_url: "https://github.com/catagalan-mtl/pawsh",
contribute:
   {"Antoine S Marchand"=>"https://github.com/antmarchand",
    "Kirstin Penzes"=>"https://gith\nub.com/KPenzes",
    "Sofia D."=>"https://github.com/daouasof"},
  tagline: "Fabulous pets, for less")

pawsh.save!

puts "creating My Portfolio...  "

portfolio = Project.new(name: "My Portfolio",
description: "Personal portfolio website.",
img_url: "sharing-card",
video_url: "portfolio-demo.mp4",
info: "This website was developed as a personal project to showcase my work. It is a fully responsive website built from a single page template and transformed into a rails app with a PostgreSQL database. I have modified and restructured the original open source code to support my needs and preferences, creating new features such as show pages for my projects.",
stack: "Ruby on Rails, HTML5, CSS, JavaScript, Stimulus, PostgreSQL, Heroku",
gh_url: "https://github.com/catagalan-mtl/my-portfolio",
credits: "* original open source template by:",
contribute: {"Syed Mohsin"=>"https://github.com/devsyedmohsin"})

portfolio.save!

puts "seeding complete!"
