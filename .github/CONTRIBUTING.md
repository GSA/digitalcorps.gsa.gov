# Contributing guidelines

We're so glad you're thinking about contributing to a [open source project of the U.S. government](https://code.gov/)! If you're unsure about anything, just ask -- or submit the issue or pull request anyway. The worst that can happen is you'll be politely asked to change something. We love all friendly contributions.

We encourage you to read this project's CONTRIBUTING policy (you are here), its [LICENSE](../LICENSE.md), and its [README](../README.md).

## Policies

We want to ensure a welcoming environment for all of our projects. Our staff follow the [TTS Code of Conduct](https://18f.gsa.gov/code-of-conduct/) and all contributors should do the same.

We adhere to the [18F Open Source Policy](https://github.com/18f/open-source-policy). If you have any questions, just [shoot 18F an email](mailto:18f@gsa.gov).

## Public domain

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0 dedication. By submitting a pull request or issue, you are agreeing to comply with this waiver of copyright interest.

## Development with Federalist + U.S. Web Design System + Jekyll

This [Jekyll theme](https://jekyllrb.com/docs/themes/) is developed using the [U.S. Web Design System v2](https://v2.designsystem.digital.gov) and is focused on providing developers a starter kit and reference implementation for Federalist websites.  This code uses the [Jekyll](https://jekyllrb.com) site engine and built with Ruby.  Primary build, deployment, and hosting are done through [Federalist](https://federalist.18f.gov/).

This project strives to be compliant with requirements set by [21st Century IDEA Act](https://www.meritalk.com/articles/senate-passes-idea-act/). The standards require that a website or digital service:

- is accessible to individuals with disabilities;
- has a consistent appearance;
- does not duplicate any legacy websites (the legislation also requires agencies to ensure that legacy websites are regularly reviewed, removed, and consolidated);
- has a search function;
- uses an industry standard secure connection;
- “is designed around user needs with data-driven analysis influencing management and development decisions, using qualitative and quantitative data to determine user goals, needs, and behaviors, and continually test the website, web-based form, web-based application, or digital service to ensure that user needs are addressed;”
- allows for user customization; and
- is mobile-friendly.

## Affiliated services

The site is augmented with several affiliated services that you may need to access; notably:

- Google Analytics
- Google Search Console
- Digital Analytics Program (DAP)
- Search.gov
- Cloud.gov Pages (aka Federalist)

## One-time local setup for Mac users

This is the "advanced" setup option for developers who want to host the Jekyll site natively in Node instead of Docker containers.  It will require local admin privileges.

### Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Note: you may need to supply your Mac password several times as this runs to verify local Admin actions.

### Git, Node, Npm

```bash
brew install git
brew install node
brew install npm
```

First time setup for Git:

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@gsa.gov
git config --global pull.rebase true
```

### Chruby and Ruby-Install

```bash
brew install chruby ruby-install
```

### Ruby

```bash
ruby-install ruby 3.1.4
```

After Ruby is installed, add these 2 lines on ~/.bash_profile. If you're using ZSH as your shell, add these to ~/.zshrc.

```txt
source /usr/local/opt/chruby/share/chruby/chruby.sh
source /usr/local/opt/chruby/share/chruby/auto.sh
```

To get to the editor of .zshrc:

1. Right-click on Finder and select “Go to Folder” or `Ctrl+Shift+G` if already open, then type in `~`
2. `Cmd+Shift+.` to show hidden files
3. Double click on `.zshrc`

To use a specific version of Ruby:

```bash
chruby 3.1.4
```

#### Troubleshooting Ruby

You may need to install xcode files before installing Jekyll or Ruby, but probably not

```bash
xcode-select --install
```

If you have a `brew` installed version of Ruby in your path, it may conflict with a `ruby-install` version.

```bash
brew uninstall ruby
```

Also remove references to the `/usr/local/ruby` paths in `.zshrc` file.

### Jekyll

```bash
gem install --user-install bundler jekyll
```

### Local repo setup

To make a local copy of the repository, where you will work until you’re ready to share and merge:

1. Create /Users/(yourusername)/Repos folder + add to Favorites (drag to Favorites)
2. Fork the repo from the GitHub page (skip this step if you are not using the Fork method)
3. Copy Clone information from the GitHub repo
4. We’ll clone from Terminal in VS Code setup, which will auto-set your access token

### Setup Visual Studio Code

1. Install Visual Studio Code from GSA Server Service app
2. Shift+Cmd+P, then >`View: Toggle Integrated Terminal` and then `cd Repos` at the terminal prompt
3. Clone the repo:

  ```bash
  #if forked:
  git clone https://github.com/(username)/SaferFederalWorkforce.gov.git

  # if direct:
  git clone https://github.com/GSA/SaferFederalWorkforce.gov.git

  # enter GitHub credentials if prompted
  ```

### Create first Git feature branch

Some helpful Git commands

- `git status` will show you what branch you are currently on
- `git branch` will show you what branches are available on local copy of repo
- `git branch -r` will show you what branches are available on remote copy of repo

Create new branch from currently selected branch and checkout for editing.  Feature branches are usually branched from `main`.

```bash
git checkout -b my-feature-branch
```

You can now edit that branch as needed.  See online help for more information about committing changes in Visual Studio Code and with Git command line.  This blog article is helpful for newbies:
[Making your first GitHub contribution](https://codeburst.io/a-step-by-step-guide-to-making-your-first-github-contribution-5302260a2940).

## References

- [18F Laptop setup](https://engineering.18f.gov/laptop-setup)
- [Federalist](https://federalist.18f.gov)
- [Federalist Jekyll Template](https://github.com/18F/federalist-uswds-jekyll#readme)
