//"use strict";
/*eslint-disable strict*/ //Disabling check because we cant run strict mode

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;


//var Router = require('react-router');
//var RouteHandler = Router.RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<div className="container-fluid"></div>
				<RouteHandler />		 
					

			

			</div>
		);
	}
});

module.exports = App;