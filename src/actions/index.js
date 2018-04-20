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
} from '../helper/postAPI';

//actions types 
export const ALL_POSTS_SUCCESS = 'ALL_POSTS_SUCCESS';
export const ALL_CATEGORIES_SUCCESS = 'ALL_CATEGORIES_SUCCESS';
export const SELECT_SORT = 'SELECT_SORT';
export const DISPLAY_COMMENTS_ACTIVE = 'DISPLAY_COMMENTS_ACTIVE';
export const DISPLAY_POST_ACTIVE = 'DISPLAY_POST_ACTIVE';

export const CHANGE_POST_SCORE = 'CHANGE_POST_SCORE';

////--------------------/////
export const ADD_NEW_POST = 'ADD_NEW_POST';

export const DELETE_POST = 'DELETE_POST';

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
				.then(data => data && dispatch(displayPostActive(data)));
		} else {
			dispatch(displayPostActive(data));
		}
	};
}

export function fetchActiveComments(id) {
	return dispatch => {
		getPostComments(id)
			.then(data => dispatch(displayCommentsActive(data)));
	};
}

function displayCommentsActive(comments) {
	return {
		type: DISPLAY_COMMENTS_ACTIVE,
		comments,
	};
}

function displayPostActive(post) {
	return {
		type: DISPLAY_POST_ACTIVE,
		post,
	};
}







export function addNewPost(title, body, author, category) {
	return {
		type: ADD_NEW_POST,
		id: uuid(),
		title,
		body,
		author,
		category,
		timeStamp: Date.now()
	};
}

export function deletePost(id) {
	return {
		type: DELETE_POST,
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

