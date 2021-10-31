# United States Digital Corps

The [U.S. Digital Corps](https://digitalcorps.gsa.gov) website is developed using the [U.S. Web Design System v2](https://v2.designsystem.digital.gov) and is hosted as a [Cloud.gov Pages](https://federalist.18f.gov/) website.  This code uses a [Jekyll](https://jekyllrb.com) site engine and built with Ruby.

This project strives to be compliant with requirements set by the [21st Century IDEA Act](https://www.congress.gov/bill/115th-congress/house-bill/5759). The standards require that a website or digital service:

- is accessible to individuals with disabilities,
- has a consistent appearance,
- does not overlap with or duplicate any legacy websites,
- contains a search function,
- is provided through an industry standard secure connection,
- is designed around user needs,
- provides users with the option for a more customized digital experience that allows users to complete digital transactions in an efficient and accurate manner, and
- is fully functional and usable on common mobile devices.

## Setup for developers

Clone the repository.

```bash
git clone https://github.com/GSA/digitalcorps.gsa.gov.git
cd digitalcorps.gsa.gov
```

Install the Node.js and Ruby Gem dependencies.

```bash
npm install
bundle install
```

Build the site.

```bash
npm run build
```

Run the site locally.

```bash
npm start
```

Open your web browser to [localhost:4000](http://localhost:4000/) to view the site.

After you make changes, be sure to run the tests.

```bash
npm run test-a11y
npm run test-links
```

## Technologies you should familiarize yourself with

- [Jekyll](https://jekyllrb.com/docs/) - The primary site engine that builds your code and content.
- [Front Matter](https://jekyllrb.com/docs/frontmatter) - The top of each page/post includes keywords within `--` tags. This is meta data that helps Jekyll build the site, but you can also use it to pass custom variables.
- [U.S. Web Design System v2](https://v2.designsystem.digital.gov) - The guidance, components, controls, and styles used for the site.

## Contributing

See [CONTRIBUTING](.github/CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](.github/CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the [CC0 1.0
> Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
> copyright interest.
