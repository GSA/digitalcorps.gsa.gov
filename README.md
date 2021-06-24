# United States Digital Corps

The [U.S. Digital Corps](https://digitalcorps.gsa.gov/) website is developed using the [U.S. Web Design System v2.0](https://v2.designsystem.digital.gov) and is focused on providing developers a starter kit and reference implementation for [Federalist](https://federalist.18f.gov/) websites.

This code uses the [Jekyll](https://jekyllrb.com) site engine and built with Ruby.

This project assumes that you are comfortable editing source code. If you prefer to launch a website without editing any source code, checkout [uswds-jekyll](https://github.com/18F/uswds-jekyll), which allows you to change the layout and content with configuration files.

This project strives to be compliant with requirements set by [21st Century IDEA Act](https://www.meritalk.com/articles/senate-passes-idea-act/). The standards require that a website or digital service:

- is accessible to individuals with disabilities;
- has a consistent appearance;
- does not duplicate any legacy websites (the legislation also requires agencies to ensure that legacy websites are regularly reviewed, removed, and consolidated);
- has a search function;
- uses an industry standard secure connection;
- “is designed around user needs with data-driven analysis influencing management and development decisions, using qualitative and quantitative data to determine user goals, needs, and behaviors, and continually test the website, web-based form, web-based application, or digital service to ensure that user needs are addressed;”
- allows for user customization; and
- is mobile-friendly.

## Installation

Clone the repository.

```bash
git clone https://github.com/GSA/digitalcorps.gsa.gov.git
cd digitalcorps.gsa.gov
```

Install the Node.js dependencies.

```bash
npm install
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
npm test
```

Note that when built by Federalist, `npm run federalist` is used instead of the `build` script.

## Technologies you should familiarize yourself with

- [Jekyll](https://jekyllrb.com/docs/) - The primary site engine that builds your code and content.
- [Front Matter](https://jekyllrb.com/docs/frontmatter) - The top of each page/post includes keywords within `--` tags. This is meta data that helps Jekyll build the site, but you can also use it to pass custom variables.
- [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov)

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the [CC0 1.0
> Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
> copyright interest.
