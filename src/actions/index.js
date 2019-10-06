//dispatches actions to reducers

import posts from '../apis/posts';
import _ from 'lodash';
import history from '../history';

export const createPost = (formValues) => async (dispatch) => {
	const response = await posts.post('/posts', {...formValues});
	dispatch({type: 'CREATE_POSTS', payload: response.data});
	history.push('/');
};

export const createComment = (formValues, id) => async (dispatch) => {
	const response = await posts.post(`/posts/${id}/comments`, {...formValues});
	dispatch({type: 'CREATE_COMMENT', payload: response.data});
	history.push('/');
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());
	const userIds = _.uniq(_.map(getState().posts, 'userId'));
	userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
	const response = await posts.get('/posts');

	dispatch({type: 'FETCH_POSTS', payload: response.data}) 
};

export const fetchUser = id => async dispatch => {
	const response = await posts.get(`/posts/${id}`);

	dispatch({type: 'FETCH_USER', payload: response.data});
};

export const fetchPost = (id) => async dispatch => {
	const response = await posts.get(`/posts/${id}`);
	dispatch({type: 'FETCH_POST', payload: response.data});
};

export const fetchComments = (id) => async dispatch => {
	const response = await posts.get(`/posts/${id}/comments`);
	dispatch({type: 'FETCH_COMMENTS', payload: response.data}) 
};

/*
export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch({type: 'FETCH_POSTS', payload: response.data}) 
};

export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceholder.get('/users/' + id);

	dispatch({type: 'FETCH_USER', payload: response.data});
};
*/