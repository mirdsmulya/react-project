"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var AuthorsList = React.createClass({
	render: function() {
		var createAuthorRow = function(author) {
			return (
				<tr key={author.id}>
					<td><Link to='manageAuthor' params={{id: author.id}}>{author.id}</Link></td> 
					<td>{author.firstName} {author.lastName} </td>
					<td> {author.status} </td>
				</tr>
			);
		};
		return (
			<div>

				
				<table className="table">
					<thead>
						<th>ID</th>
						<th>Name</th>
						<th>Status</th>
					</thead>
					<tbody>
						{this.props.authors.map(createAuthorRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
}); 
module.exports = AuthorsList;