import { combineReducers } from 'redux';
import {
	ALL_POSTS_SUCCESS,
	
	ALL_CATEGORIES_SUCCESS,
	
	POST_ACTIVE_ID,
	POST_ACTIVE_COMMENTS,
	
	ADD_POST,
	DELETED_POST,
	SAVED_POST,
	CHANGE_POST_SCORE,
	
	ADDED_COMMENT,
	EDITED_COMMENT,
	DELETED_COMMENT,
	CHANGE_COMMENT_SCORE,
	
} from '../actions';

const initialPosts = {
	byId: {},
	idsArr: []
};

const initialActivePost = {
	postId: '',
	comments: {},
	idsCommentsArr: [],
};

const initialCategories = {
	allCategories: {},
	categoriesNames: []
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
		case ADD_POST: 
			return {
				...state,
				byId: {
					...state.byId,
					[action.post.id]: {
						...action.post
					}
				},
				idsArr: state.idsArr.concat(action.post.id)
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
							title: action.title,
							body: action.body,							
						}
				}
			};	
		default:
			return state;
	}
}

function categoriesReducer(state=initialCategories, action) {
	switch (action.type) {
		case ALL_CATEGORIES_SUCCESS:
			return {
				...state,
				allCategories: action.categories.reduce((acc, category) => {
					acc[category.name] = category;
					return acc;
				}, {}),
				categoriesNames: action.categories.map(category => category.name)
			};
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
				comments: action.comments.reduce( (acc, comment) => {
					 acc[comment.id] = comment;
					 return acc;
				}, {}),
				idsCommentsArr: action.comments.map( comment => comment.id)
			};
		case DELETED_POST: 
			return {
				...initialActivePost
			};
		case ADDED_COMMENT:
			return {
				...state,
				comments: {
					...state.comments,
					[action.comment.id]: action.comment
				},
				idsCommentsArr: [...state.idsCommentsArr, action.comment.id]
			};
		case EDITED_COMMENT: 
			return {
				...state,
				comments: {
					...state.comments,
					[action.id]: {
						...state.comments[action.id],
						body: action.body,
						timestamp: action.timestamp
					}
				}
			}
		case DELETED_COMMENT: 
			return {
				...state,
				comments: {
					...state.comments,
					[action.id]: {
						...state.comments[action.id],
						deleted: true
					}
				}
			};
		case CHANGE_COMMENT_SCORE:
			return {
				...state,
				comments: {
					...state.comments,
					[action.id]: {
						...state.comments[action.id],
						voteScore: action.voteText === "upVote" 
							? state.comments[action.id].voteScore + 1 
							: state.comments[action.id].voteScore - 1
					}
				}
			};	
		default:
			return state;
	}
}
const rootReducer = combineReducers({
	posts: postsReducer,
	activePost: activePostReducer,
	categories: categoriesReducer,
});
export default rootReducer;

