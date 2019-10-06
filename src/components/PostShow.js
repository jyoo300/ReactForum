//show an individual post's title, body, and name through the {fetchPost} action
//displays all comments for that posts
//links to comment create 

import React from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';
import {Link} from 'react-router-dom';
import CommentList from './CommentList';
import PostList from './PostList';

class PostShow extends React.Component {
	componentDidMount() {
		const {id} = this.props.match.params;
		this.props.fetchPost(id);
	}

	render() {
		if (!this.props.post) {
      		return <div>Loading...</div>;
   		}

		const { name, title, body } = this.props.post;

		return (
			<div>
				<h2>{title}</h2>
				<p>{body}</p>
				<h4>{name}</h4>
				<h1>Comments</h1>
				<CommentList id={this.props.post.id}/>
				<Link to={`/comments/new/${this.props.post.id}`} className="ui button primary">
					Post a Comment
				</Link>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostShow);