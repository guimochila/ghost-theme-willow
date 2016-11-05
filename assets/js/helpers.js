/*
|----------------------------------------------------------------------------
| Handlebars.js helpers if_eq registered to check the if 
| the navigation menu is home, so add a icon in the 'Home' menu.
|
| Please, edit the config.js file in the Ghost root folder and add
| the following entry:
|
| require ('./content/themes/ghost-theme-willow/assets/js/helpers.js')();
|
|----------------------------------------------------------------------------
*/
var hbs = require('express-hbs');

module.exports = function() {
  hbs.registerHelper('if_eq', function(x, y, opts) {
    if(x == y)
      return opts.fn(this);
    else
      return opts.inverse(this);
    });
};
