import { combineReducers } from 'redux';
import {
	ALL_POSTS_SUCCESS,
	ALL_CATEGORIES_SUCCESS,
	SELECT_SORT,
	CHANGE_POST_SCORE,
	
	POST_ACTIVE_ID,
	POST_ACTIVE_COMMENTS,
	
	DELETED_POST,
	SAVED_POST,
	
} from '../actions';

const initialPosts = {
	byId: {},
	idsArr: []
};

const initialActivePost = {
	postId: '',
	comments: []
};

function postsReducer(state=initialPosts, action) {
	switch (action.type) {
		case ALL_POSTS_SUCCESS:
			return {
				byId: action.posts.reduce( (postObj, post) => {
					postObj[post.id] = postObj[post.id] || post;
					return postObj;
				}, {}),
				idsArr: action.posts.map(post => post.id)	
			};
		case CHANGE_POST_SCORE:
			return {
				...state,
				byId: {
					...state.byId,
					[action.id]: {
						...state.byId[action.id],
						voteScore: action.voteText === "upVote" ? state.byId[action.id].voteScore + 1 : state.byId[action.id].voteScore - 1
					}
				},
			};
		case DELETED_POST: 
			return {
				...state,
				byId: {
					...state.byId,
					[action.id]: {
						...state.byId[action.id],
						deleted: true
					}
				}
			};
		case SAVED_POST: 
			return {
				...state,
					byId: {
						...state.byId,
						[action.id]: {
							...state.byId[action.id],
							body: action.body,
							title: action.title
						}
				}
			};	
		default:
			return state;
	}
}

function categoriesReducer(state=[], action) {
	switch (action.type) {
		case ALL_CATEGORIES_SUCCESS:
			return [...action.categories];
		default:
			return state;
	}
}

function currentSortReducer(state='none', action) {
	switch (action.type) {
		case SELECT_SORT:
			return action.sort;
		default:
			return state;
	}
}

function activePostReducer(state=initialActivePost, action) {
	switch (action.type) {
		case POST_ACTIVE_ID:
			return {
				...state,
				postId: action.id
			};
		case POST_ACTIVE_COMMENTS:
			return {
				...state,
				comments: [...action.comments]
			};
		case DELETED_POST: 
			return {
				...initialActivePost
			};	
		default:
			return state;
	}
}
const rootReducer = combineReducers({
	posts: postsReducer,
	activePost: activePostReducer,
	categories: categoriesReducer,
	currentSort: currentSortReducer
});
export default rootReducer;

