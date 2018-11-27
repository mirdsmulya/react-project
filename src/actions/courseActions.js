"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseApi = require('../api/courseApi');
var ActionType = require('../constants/actionTypes');

var CourseActions = {
	createCourse: function(course) {
		var newCourse = CourseApi.saveCourse(course);
		//var newAuthor = AuthorApi.saveAuthor(course);
		// hey dispatcher, go tell the store that an author was just created
		Dispatcher.dispatch({
			actionType: ActionType.CREATE_COURSE,
			course: newCourse

		});																																																																																																																																																		

	}

};

module.exports = CourseActions;		