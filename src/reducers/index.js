import { combineReducers } from 'redux';
import { sortList,
	ALL_POSTS_SUCCESS,
	ALL_CATEGORIES_SUCCESS,
	SELECT_SORT,
	CHANGE_POST_SCORE,
	
	DISPLAY_COMMENTS_ACTIVE,
	DISPLAY_POST_ACTIVE,
	
	DELETED_COMMENT,
	ADDED_COMMENT,
	EDITED_COMMENT,
	
} from '../actions';

const initialPosts = {
	byId: {},
	idsArr: []
};

const initialActivePost = {
	post: {},
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
		case DISPLAY_POST_ACTIVE:
			return {
				...state,
				post: {...action.post} 
			};
		case DISPLAY_COMMENTS_ACTIVE: 
		console.log(action);
			return {
				...state,
				comments: [...action.comments]
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

