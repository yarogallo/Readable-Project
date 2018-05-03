import { combineReducers } from 'redux';
import {constants} from '../actions';

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
		case constants.ALL_POSTS_SUCCESS:
			return {
				byId: action.posts.reduce( (postObj, post) => {
					postObj[post.id] = postObj[post.id] || post;
					return postObj;
				}, {}),
				idsArr: action.posts.map(post => post.id)	
			};
		case constants.CHANGE_POST_SCORE:
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
		case constants.ADD_POST: 
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
		case constants.DELETED_POST:
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
		case constants.SAVED_POST: 
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
		case constants.ALL_CATEGORIES_SUCCESS:
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
		case constants.POST_ACTIVE_ID:
			return {
				...state,
				postId: action.id
			};
		case constants.POST_ACTIVE_COMMENTS:
			return {
				...state,
				comments: action.comments.reduce( (acc, comment) => {
					 acc[comment.id] = comment;
					 return acc;
				}, {}),
				idsCommentsArr: action.comments.map( comment => comment.id)
			};
		case constants.DELETED_POST: 
			return {
				...initialActivePost
			};
		case constants.ADDED_COMMENT:
			return {
				...state,
				comments: {
					...state.comments,
					[action.comment.id]: action.comment
				},
				idsCommentsArr: [...state.idsCommentsArr, action.comment.id]
			};
		case constants.EDITED_COMMENT: 
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
		case constants.DELETED_COMMENT: 
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
		case constants.CHANGE_COMMENT_SCORE:
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

