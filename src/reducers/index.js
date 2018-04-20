import { combineReducers } from 'redux';
import { sortList,
	ALL_POSTS_SUCCESS,
	ALL_CATEGORIES_SUCCESS,
	SELECT_SORT,
	CHANGE_POST_SCORE,
	
	POST_ACTIVE_ID,
	POST_ACTIVE_COMMENTS,
	
	ADD_FETCHED_POST,
	DELETED_POST,
	
	DELETED_COMMENT,
	ADDED_COMMENT,
	EDITED_COMMENT,
	
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
					postObj[post.id] = postObj[post.id] ||post;
					return postObj;
				}, {}),
				idsArr: action.posts.map(post => post.id)	
			};
		case ADD_FETCHED_POST: 
			return {
				...state,
				byId: {
					...state.byId,
					[action.post.id]: action.post
				}
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
		// case DELETED_COMMENT: 
		// 	return {
		// 		...state,
		// 		comments: state.comments.filter( comment => comment.id !== action.id)
		// 	};
		// case ADDED_COMMENT: 
		// 	return {
		// 		...state,
		// 		comments: [...state.comments, action.comment]	
		// 	};
		// case EDITED_COMMENT:
		// 	return {
		// 		...state,
		// 		comments: state.comments.map( comment => {
		// 			return comment.id === action.id
		// 				? {...comment, body: action.body, timestamp: action.timestamp}
		// 				: comment
		// 		})
		// 	};
		default:
			return state;
	}
}
//function commentsReducer(state={}, action) {}
//function currentSortReducer(state=sortList[0], action) {}
//function currentCategoryReducer(state='', action) {}

const rootReducer = combineReducers({
	posts: postsReducer,
	activePost: activePostReducer,
	categories: categoriesReducer,
	currentSort: currentSortReducer
	//comments: commentsReducer,
	//currentSort: currentSortReducer,
	//currentCategory: currentCategoryReducer
});
export default rootReducer;

