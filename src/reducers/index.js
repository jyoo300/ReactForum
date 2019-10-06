//combines various reducers into a single reducing function
import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  form: formReducer,
  comments: commentsReducer
});