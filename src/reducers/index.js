import { combineReducers } from 'redux';
import { sortList,
	ALL_POSTS_SUCCESS,
	DISPLAY_POST_DETAIL,
	DELETED_COMMENT,
	ADDED_COMMENT,
	EDITED_COMMENT
} from '../actions';

function postsReducer(state={}, action) {
	switch (action.type) {
		case ALL_POSTS_SUCCESS:
			return {
				byId: action.posts.reduce( (postObj, post) => {
					postObj[post.id] = postObj[post.id] ||post;
					return postObj;
				}, {}),
				idsArr: action.posts.map(post => post.id)	
			};
		default:
			return state;
	}
}

function activePostReducer(state={}, action) {
	switch (action.type) {
		case DISPLAY_POST_DETAIL:
			return {
				postId: action.id,
				comments: action.comments
			};
		case DELETED_COMMENT: 
			return {
				...state,
				comments: state.comments.filter( comment => comment.id !== action.id)
			};
		case ADDED_COMMENT: 
			return {
				...state,
				comments: [...state.comments, action.comment]	
			};
		case EDITED_COMMENT:
			return {
				...state,
				comments: state.comments.map( comment => {
					return comment.id === action.id
						? {...comment, body: action.body, timestamp: action.timestamp}
						: comment
				})
			};
		default:
			return state;
	}
}
//function commentsReducer(state={}, action) {}
//function currentSortReducer(state=sortList[0], action) {}
//function currentCategoryReducer(state='', action) {}

const rootReducer = combineReducers({
	posts: postsReducer,
	activePost: activePostReducer
	//comments: commentsReducer,
	//currentSort: currentSortReducer,
	//currentCategory: currentCategoryReducer
});
export default rootReducer;

