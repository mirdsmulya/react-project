"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var Toastr = require('toastr');

var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore'); 
var AuthorApi = require('../../api/authorApi');
//console.log({this.props.params.id});
var ManageAuthorPage = React.createClass({
	
	mixins: [
		Router.Navigation
	],	

	statics: {
		willTransitionFrom: function(transition, component) {
			if (component.state.dirty && !confirm('Are you serious want to leave this page without saving?')) {
				transition.abort();
			} 

		}
	},

/*
	getInitialState: function() {
		return {
			author: {id: '', firstName: '', lastName: ''},
			errors: {},
			dirty: false

		};
	}, */

	componentWillMount: function(){
		var authorId = this.props.params.id;// from the path /author:d
		if (authorId) {
			this.setState({author: AuthorApi.getAuthorById(authorId)});
			//this.setState({author: AuthorStore.getAuthorById(authorId)});
		} 
	}, 
	
	setAuthorState: function(event) {
		this.setState({dirty: true});
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
		AuthorActions.createAuthor(this.state.author);
		this.setState({dirty: false });
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