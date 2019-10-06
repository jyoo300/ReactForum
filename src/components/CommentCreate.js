//has a comment form which takes in values for the comment body and the name of the user
//the data is then used to create a comment through the {createComment} action

import React from 'react';
import {connect} from 'react-redux';
import {createComment} from '../actions';
import CommentForm from './CommentForm';
import {fetchPost} from '../actions';

class CommentCreate extends React.Component {
	onSubmit = (formValues) => {
		const {id} = this.props.match.params;
		this.props.createComment(formValues, id);
	};

	render() {
		return (
			<div>
				<h3>Post a Comment</h3>
				<CommentForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {createComment, fetchPost})(CommentCreate);