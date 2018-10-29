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
<<<<<<< HEAD
				<div className="container-fluid"></div>
				<RouteHandler />

			
=======
				<div className="container-fluid">
				<RouteHandler />

			</div>
>>>>>>> b1a93bbf0107ea41a505e6f804c735f0b7b9948a
			</div>
		);
	}
});
module.exports = App;