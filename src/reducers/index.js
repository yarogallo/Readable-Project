import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import categoriesReducer from './categoriesReducer';
import activePostReducer from './activePostReducer';

const rootReducer = combineReducers({
	posts: postsReducer,
	activePost: activePostReducer,
	categories: categoriesReducer,
});
export default rootReducer;

