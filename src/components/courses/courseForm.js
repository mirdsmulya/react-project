'use strict';

var React = require('react');
var Input = require('../common/textinput');
var courseForm = React.createClass({
	render: function() {
		return (
			<form>
			<h1>Manage Course</h1>
			<Input 
				name="title"
				label="Course Title"
				value={this.props.course.title}
				onChange={this.props.onChange} 
				error={this.props.errors.title} />
	
			<Input 
				name="author"
				label="Author"
				value={this.props.course.author}
				onChange={this.props.onChange}
				error={this.props.errors.author} />

			<Input 
				name="category"
				label="Category"
				value={this.props.course.category}
				onChange={this.props.onChange}
				error={this.props.errors.category} />

			<Input 
				name="length"
				label="Length"
				value={this.props.course.length}
				onChange={this.props.onChange}
				error={this.props.errors.length} />
			
			<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />

			</form>
		);
	}
});
module.exports = courseForm;