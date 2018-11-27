"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');

//var CourseActions = require('../../actions/courseActions');
var CourseApi = require('../../api/courseApi');
var AuthorStore = require('../../stores/authorStore'); 
var CourseList = require('./courseList');
var Link = require('react-router').Link;

var Courses = React.createClass({
	getInitialState: function() {
		return {
			courses: CourseApi.getAllCourses()
		};

	},

	/*	
	componentDidMount: function() {

		if (this.isMounted()) {
			this.setState({ authors: AuthorApi.getAllAuthors() });

		}
	}, 
	*/
	render: function() {

		return (
			<div>
				<h1>Course</h1>
				<Link to="addCourse" className="btn btn-default">Add Course</Link>
				<CourseList courses={this.state.courses} />
			
			</div>
		);
	}
});
module.exports = Courses;