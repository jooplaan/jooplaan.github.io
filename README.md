# www.jooplaan.com
A simple theme for showcasing work, emphasis on whitespace & transparency.

[Live Demo](http://www.jooplaan.com/)

[![Build Status](https://travis-ci.org/jooplaan/jooplaan.github.io.svg?branch=master)](https://travis-ci.org/jooplaan/jooplaan.github.io)

Build process: Gulp
Asset management: Bower and Composer
Deployment: Make and rsync.

## System Preparation

To use this starter project, you'll need the following things installed on your machine.

### Required
[Ruby and Ruby Gems](https://rvm.io/rvm/install)
[Jekyll](http://jekyllrb.com/) - `gem install jekyll`
[Bundler](http://bundler.io/) - `gem install bundler` (mac users may need sudo)

[NodeJS](http://nodejs.org) - use the installer.
[GulpJS](https://github.com/gulpjs/gulp) - `npm install -g gulp` (mac users may need sudo)
[Bower](http://bower.io/) - `npm install -g bower`

### Optional
[Git](https://git-scm.com)
[Composer](https://getcomposer.org) (installs PHPMailer)
[Make](https://www.gnu.org/software/make) (used with rsync for deploying)


## Local Installation

Git clone this repository, or download it into a directory of your choice. Inside the directory run

1. `bower install` (reference: .bowerrc and bower.json)
2. `npm install` (reference: package.json)
3. `bundle install` (reference: Gemfile and Gemfile.lock)
4. `composer install` (optional, reference: composer.json and composer.lock)

## Usage

###Start Gulp

`gulp`
This will build your Jekyll site, give you file watching, browser synchronization, auto-rebuild, CSS injecting etc.

`http://127.0.0.1.xip.io:3000`
Here you can access your site. If you want to access it with your phone or tablet, use the external access adress which is showing up in the terminal window.

`http://127.0.0.1.xip.io:3001`
Access the Browsersync UI.

### Foundation for Sites Components

We don't want to include unused CSS an JavaScript.

  For the components you want to use, uncomment the component's
  1. Sass in /assets/scss/foundation/_foundation.scss
  2. JavaScript in the gulpfile.js in PATHS (you need to restart gulp)

Customize the variables used by Foundation in the settings file located in /assets/scss/foundation/.

Place your custom sass in the subfolders of /assets/scss/. These folders follow the [SMACSS](https://smacss.com/) architecture. This should be the most scalable solution - from small to very large sites.


## Credits
This package is based on the starting point from [@core77](https://github.com/core77/jekyll-foundation), who based his work on work from [@macbleser](https://github.com/macbleser/jekyll-gulp-sass-foundation)

The compress.html layout is provided by [@penibelst](http://jch.penibelst.de/).

## License
This package is licensed under the terms of the MIT license.
