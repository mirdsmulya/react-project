"use strict";

var React = require('react');
var Router = require('react-router');
var courseForm = require('./courseForm');
var Toastr = require('toastr');

var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore'); 
var AuthorApi = require('../../api/authorApi');
//console.log({this.props.params.id});
var ManageCoursePage = React.createClass({
	
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


	getInitialState: function() {
		return {
			course: {title: '', author: '', category: '', length: ''},
			errors: {},
			dirty: false

		};
	}, 

	componentWillMount: function(){
		var courseTitle = this.props.params.title;// from the path /author:d
		if (courseTitle) {
			this.setState({course: AuthorApi.getAuthorById(courseTitle)});
			//this.setState({author: AuthorStore.getAuthorById(authorId)});
		} 
	}, 
	
	setCourseState: function(event) {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.course[field] = value;
		return this.setState({course: this.state.course});

	},

								
	courseIsValid: function(event) {
		var courseStatus = true;
		this.state.errors = {}; //clear any previous error

		if (this.state.course.title.length < 3) {
			this.state.errors.title = "Please the input must be more than 2 character!";
			courseStatus = false;
		}
		if (this.state.course.author.length < 3) {		
			this.state.errors.author = "Please the input must be more than 2 character!";
			courseStatus = false;
		}
		this.setState({errors: this.state.errors});
		return courseStatus;
	},

	saveCourse: function(event) {
		event.preventDefault();
		if (!this.courseIsValid()) {
			return;

		}
		AuthorActions.createAuthor(this.state.course);
		this.setState({dirty: false });
		Toastr.success('Author Saved!');
		this.transitionTo('course');

	
	},

	render: function() {
		return (
		<AuthorForm 
		course={this.state.course}
		onChange={this.setCourseState} 
		onSave={this.saveCourse}
		errors={this.state.errors} />

		);
	} 
});

module.exports = ManageCoursePage;