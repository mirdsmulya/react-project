'use strict';

var React = require('react');
var Input = require('../common/textinput');
var authorForm = React.createClass({
	render: function() {
		return (
			<form>
			<h1>Manage Author</h1>
			<label htmlFor="firstname">First Name</label>
			<input type="text"
				name="firstname"
				className="form-control"
				placeholder="First Name"
				ref="firstname"
				onChange={this.props.onChange}
				value={this.props.author.firstName}/>
			<br />

			<label htmlFor="lastName">Last Name</label>
			<input type="text"
				name="lastname"
				className="form-control"
				placeholder="Last Name"
				ref="lastname"
				onChange={this.props.onChange}
				value={this.props.author.lastName}/>
			<br />

			<input type="submit" value="Save" className="btn btn-default" />

			</form>
		);
	}
});
module.exports = authorForm;