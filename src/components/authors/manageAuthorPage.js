"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var Toastr = require('toastr');
var AuthorApi = require('../../api/authorApi');

var ManageAuthorPage = React.createClass({
	
	mixins: [
		Router.Navigation
	],	
	getInitialState: function() {
		return {
			author: {id: '', firstName: '', lastName: ''},
			errors: {}
		};
	},
	setAuthorState: function(event) {
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState({author: this.state.author});

	},

	authorIsValid: function(event) {
		var authorStatus = true;
		this.state.errors = {}; //clear any previous error

		if (this.state.author.firstName.length < 3) {
			this.state.errors.firstName = "Please the input must be more than 2 character!";
			authorStatus = false;
		}
		if (this.state.author.lastName.length < 3) {		
			this.state.errors.lastName = "Please the input must be more than 2 character!";
			authorStatus = false;
		}
		this.setState({errors: this.state.errors});
		return authorStatus;
	},

	saveAuthor: function(event) {
		event.preventDefault();
		if (!this.authorIsValid()) {
			return;

		}
		AuthorApi.saveAuthor(this.state.author);
		Toastr.success('Author Saved!');
		this.transitionTo('authors');


	},

	render: function() {
		return (
		<AuthorForm 
		author={this.state.author}
		onChange={this.setAuthorState} 
		onSave={this.saveAuthor}
		errors={this.state.errors} />

		);
	}
});

module.exports = ManageAuthorPage;