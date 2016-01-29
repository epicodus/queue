var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Any other options
    });

    app.import('bower_components/moment/moment.js');
    app.import('bower_components/bootstrap/dist/css/bootstrap.css');
    app.import('bower_components/morris.js/morris.js');
    app.import('bower_components/morris.js/morris.css');

    return app.toTree();
};
