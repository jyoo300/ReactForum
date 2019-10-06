//creates routes for various components

import React from 'react';
import PostList from './PostList';
import PostCreate from './PostCreate';
import PostShow from './PostShow';
import CommentCreate from './CommentCreate';

import {Router, Route, Switch} from 'react-router-dom';
import history from '../history';

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<Router history={history}>
					<div>
						<Switch>
							<Route path="/" exact component={PostList} />
							<Route path="/posts/new" exact component={PostCreate} />
							<Route path="/posts/:id" exact component={PostShow} />
							<Route path="/comments/new/:id" exact component={CommentCreate} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;