"use strict";

var React = require('react');
var Router = require('react-router');



var About = React.createClass({
	/*
	static: {
		willTransitionTo: function(transition, params, query ,callback) {
			if (!confirm('Are you sure want to read a page that\'s will surprise you?')) {
				transition.About();
			} else {
				callback();
			}
		}
	}
	*/	
	render: function(){
		return (
			<div>
				<h1>About</h1>
				<p>
					This application uses the following technologies:
					<ul>
						<li>React</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Npm</li>
						<li>ESlint</li>
						<li>Bootstrap</li>
						<li>HTML</li>
						<li>Node</li>	
						
					</ul>
				</p>

			</div>
		);
	}
});

module.exports = About;
