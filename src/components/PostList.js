//lists every post with their title, body, and the name of the person creating the post through the {fetchPostsandUsers} action
//links to post create page

import React from 'react';
import {connect} from 'react-redux';
import {fetchPostsAndUsers} from '../actions';
import {Link} from 'react-router-dom';

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPostsAndUsers();
	}

	renderList() {
		return this.props.posts.map(post => {
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2>
								<Link to={`/posts/${post.id}`} className="header">
									{post.title}
								</Link>
							</h2>
							<p>{post.body}</p>
						</div>
						<div className="header">{post.name}</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<div className="ui relaxed divided list">{this.renderList()}</div>
				<Link to="/posts/new" className="ui button primary">
					Create Post
				</Link>
			</div>
		); 
	}
}

const mapStateToProps = (state) => {
	return {
		posts: Object.values(state.posts)
	};
};

export default connect(mapStateToProps, {fetchPostsAndUsers}) (PostList);