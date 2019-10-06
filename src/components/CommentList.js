//lists each comment's name and body through the {fetchComments} action

import React from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../actions';

class CommentList extends React.Component {
	componentDidMount() {
		this.props.fetchComments(this.props.id);
	}

	renderList() {
		return this.props.comments.map(comment => {
			return (
				<div className="item" key={comment.id}>
					<div className="content">
						<div className="description">
							<p>{comment.name}</p>
							<p>{comment.body}</p>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<div className="ui relaxed divided list">{this.renderList()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		comments: Object.values(state.comments)
	};
}

export default connect(mapStateToProps, {fetchComments}) (CommentList);