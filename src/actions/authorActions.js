"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionType = require('../constants/actionTypes');

var AuthorActions = {
	createAuthor: function(author) {
		var newAuthor = AuthorApi.saveAuthor(author);
		// hey dispatcher, go tell the store that an author was just created
		Dispatcher.dispatch({
			actionType: ActionType.CREATE_AUTHOR,
			author: newAuthor

		});																																																																																																																																																		

	}

};

module.exports = AuthorActions;		