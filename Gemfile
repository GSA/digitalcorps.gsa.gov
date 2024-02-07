ruby ">= 3.1"

source "https://rubygems.org"

gem "jekyll", "~> 3.9"
gem "execjs", "2.9.1" # https://github.com/rails/execjs/issues/99
gem "autoprefixer-rails"
gem "sprockets", "~> 4.0"
gem "kramdown-parser-gfm", "~> 1.1.0"
gem 'nokogiri', '~> 1.15', '>= 1.15.5'

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-last-modified-at" # used in sitemap
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-include-cache"
  gem 'jekyll-redirect-from'
  gem 'jekyll-paginate-v2', "3.0.0"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

gem "html-proofer", "~> 5.0"

gem "webrick", "~> 1.8"
