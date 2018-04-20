import uuid from '../helper/uniqueIdGenerator.js';
import {
	getAllPosts,
	getPostComments,
	deletePostComment,
	addCommentToPost,
	editCommentDetail,
	getAllCategories,
	votePost,
	getPostDetail,
	deletePost
} from '../helper/postAPI';

//actions types 
export const ALL_POSTS_SUCCESS = 'ALL_POSTS_SUCCESS';
export const ALL_CATEGORIES_SUCCESS = 'ALL_CATEGORIES_SUCCESS';
export const SELECT_SORT = 'SELECT_SORT';

export const POST_ACTIVE_ID = 'POST_ACTIVE_ID';
export const POST_ACTIVE_COMMENTS = 'POST_ACTIVE_COMMENTS';

export const CHANGE_POST_SCORE = 'CHANGE_POST_SCORE';

export const ADD_FETCHED_POST = 'ADD_FETCHED_POST';
export const DELETED_POST = 'DELETED_POST';

///------------///

export const EDIT_POST = 'EDIT_POST';
export const SAVE_POST = 'SAVE_POST';

export const ADDED_COMMENT = 'ADDED_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const EDITED_COMMENT = 'EDITED_COMMENT';
export const DELETED_COMMENT = 'DELETED_COMMENT';

export const sortList = {
	none: 'NONE',
	newest: 'NEWEST',
	oldest: 'OLDEST',
	max_score: 'MAX_SCORE', 
	min_score: 'MIN_AVG',
};

//fetch all posts 
export function fetchAllPosts() {
	return dispatch => {
		getAllPosts()
			.then(result => {
				if (!result) {
					return;
				}
				dispatch(allPostsSuccess(result));
			});
	};
}

function allPostsSuccess(posts) {
	return {
		type: ALL_POSTS_SUCCESS,
		posts
	};
}

// all categories

export function fetchAllCategories() {
	return dispath => {
		getAllCategories()
			.then(data => data.categories && dispath(allCategoriesSuccess(data.categories)))
	};
}

function allCategoriesSuccess(categories) {
	return {
		type: ALL_CATEGORIES_SUCCESS,
		categories,
	};
}

// select sort

export function selectSort(sort) {
	return {
		type: SELECT_SORT,
		sort
	};
}


// vote post

export function votePostScore(id, voteText) {
	return dispatch => {
		votePost(id, voteText)
			.then(data => data && dispatch(changedPostScore(id, voteText)));
	};
}

function changedPostScore(id, voteText) {
	return {
		type: CHANGE_POST_SCORE,
		id,
		voteText
	};
}

//Fetch active post detail

export function fetchActivePost(id) {
	return (dispatch, getState) => {
		const data = getState().posts.byId[id];
		if (!data) {
			getPostDetail(id)
				.then(data => data && dispatch(addFetchedPost(data)));
		} 
		dispatch(postActiveId(id));
	};
}

export function fetchActiveComments(id) {
	return dispatch => {
		getPostComments(id)
			.then(data => dispatch(postActiveComments(data)));
	};
}

function postActiveComments(comments) {
	return {
		type: POST_ACTIVE_COMMENTS,
		comments,
	};
}

function postActiveId(id) {
	return {
		type: POST_ACTIVE_ID,
		id,
	};
}

//add new post

// function addPost(post){
// 	return (dispatch, getState) => {
// 		if(getState().posts.idsArr.indeOf() !== -1) {
// 			addNewPost()
// 		}
// 	};
// }



export function addFetchedPost(post) {
	return {
		type: ADD_FETCHED_POST,
		post
	};
}

//delete post

export function deleteThisPost(id) {
	return dispatch => {
		deletePost(id)
			.then(data => data && dispatch(deletedPost(id)));
	};
}

function deletedPost(id) {
	return {
		type: DELETED_POST,
		id
	};
}

export function editPost(id) {
	return {
		type: EDIT_POST,
		id
	};
}

export function savePost(id, body, title) {
	return {
		type: SAVE_POST,
		id,
		body,
		title
	};
}

export function voteComment(id, voteText) {
	return {
		type: VOTE_COMMENT,
		id,
		voteText
	};
}

export function editComment(id, body) {
	return dispatch => {
		const timestamp = Date.now();
		editCommentDetail(id, timestamp, body)
			.then((result) =>  {
				return result && dispatch(editedComment(id, timestamp, body));
			});
	};
}

function editedComment(id, timestamp, body) {
	return {
		type: EDITED_COMMENT,
		id,
		body,
		timestamp,
	};
}

export function addComment(parentId, author, body) {
	const comment = {
		id: uuid(),
		timestamp: Date.now(),
		body,
		author,
		parentId
	};
	return dispatch => {
		addCommentToPost(comment)
			.then(result => result && dispatch(addedComment(comment)));
	};
}

function addedComment(comment) {
	return {
		type: ADDED_COMMENT,
		comment
	};
}

export function deleteComment(id) {
	return dispatch => {
		deletePostComment(id)
			.then(data => {
				if(data) {
					dispatch(commentDeleted(id));
				}
			});
	};
}

function commentDeleted(id) {
	return {
		type: DELETED_COMMENT,
		id
	};
}

