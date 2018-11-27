"use strict";

//This file is mocking a web API by hitting hard coded data.
var courses = require('./courseData').courses;

var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
/*
var _generateId = function(item) {
	return course.title;
};
*/
var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var CourseApi = {
	getAllCourses: function() {
		return _clone(courses); 
	},

	getCourseByTitle: function(title) {
		var course = _.find(courses, {title: title});
		return _clone(course);
	},
	
	saveCourse: function(course) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call...');
		courses.push(course);
/*		
		if (course.title) {
			var existingCourseIndex = _.indexOf(courses, _.find(courses, {title: course.title})); 
			courses.splice(existingCourseIndex, 1, course);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			course.title = _generateId(course);
			courses.push(course);
		}

		return _clone(course);
*/
	},

	deleteCourse: function(title) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
		_.remove(courses, {title: title});
	}
};

module.exports = CourseApi;