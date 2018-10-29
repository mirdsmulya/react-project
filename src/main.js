<<<<<<< HEAD

'use strict';
//$ = jQuery = require('jquery');
var React = require('react');
var Router = require('react-router');
var routes = require('./route');


Router.run(routes, function(Handler) {
	React.render(<Handler/>, document.getElementById('app'));
});

=======
'use strict';
//$ = jQuery = require('jquery');
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');


Router.run(routes, function(Handler) {
	React.render(<Handler/>, document.getElementById('app'));
});

>>>>>>> b1a93bbf0107ea41a505e6f804c735f0b7b9948a
/*
var App = console.log('Hello form Browserify');
																																																																											
module.exports = App;

React.render(<Home />, document.getElementById('app'));
*/