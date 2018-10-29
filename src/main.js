
'use strict';
//$ = jQuery = require('jquery');
var React = require('react');
var Router = require('react-router');
var routes = require('./route');


Router.run(routes, function(Handler) {
	React.render(<Handler/>, document.getElementById('app'));
});

/*
var App = console.log('Hello form Browserify');
																																																																											
module.exports = App;

React.render(<Home />, document.getElementById('app'));
*/