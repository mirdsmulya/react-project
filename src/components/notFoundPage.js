"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var notFoundPage = React.createClass({
	render: function() {
		return (
			<div>
				<h1> 404 Not Found </h1>
				<h2> Your Page is Not Found</h2>
				<p><Link to="app"> Go to Home </Link></p>

			</div>

		);
		
	}
});

module.exports = notFoundPage;
