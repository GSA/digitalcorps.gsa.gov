
const uswds = require("@uswds/compile");

uswds.settings.version = 3;


uswds.paths.dist.css = './assets/css';
uswds.paths.dist.theme = './sass/uswds';
uswds.paths.dist.img = './assets/uswds/img';
uswds.paths.dist.fonts = './assets/fonts';


exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;