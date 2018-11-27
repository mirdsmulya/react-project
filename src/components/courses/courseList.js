"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var CourseList = React.createClass({
	render: function() {
		var createAuthorRow = function(course) {
			return (
				<tr key={course.title}>

					<td><Link to='manageCourse' params={{title: course.title}}>{course.title}</Link></td> 
					<td>{course.author}</td>
					<td>{course.category}</td>
					<td>{course.length}</td>
				</tr>
			);
		};
		return (
			<div>

				
				<table className="table">
					<thead>
						<th>Title</th>
						<th>Author</th>
						<th>Category</th>
						<th>Length</th>
					</thead>
					<tbody>
						{this.props.courses.map(createAuthorRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
}); 
module.exports = CourseList;