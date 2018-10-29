'use strict';


var React = require('react');

var authorForm = React.createClass({
	render: function() {
		return (
			<form>
			<h1>Manage Author</h1>
			<label htmlFor="firstname">First Name</label>
			<input type="text"
				name="firsname"
				className="form-control"
				placeholder="First Name"
				ref="firstname"
				value="" />
			<br />

			<label htmlFor="lastName">Last Name</label>
			<input type="text"
				className="form-control"
				placeholder="Last Name"
				ref="lastname"
				value="" />
			<br />

			<input type="submit" value="Save" className="btn btn-default" />

			</form>
		);
	}
});
module.exports = authorForm;