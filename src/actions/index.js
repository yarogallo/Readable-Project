import uuid from '../helper/uniqueIdGenerator.js';

//actions types 

export const SELECT_SORT = 'SELECT_SORT';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SELECT_POST = 'SELECT_POST';
export const VOTE_POST = 'VOTE_POST';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const SAVE_POST = 'SAVE_POST';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

//action creators

export function selectSort(sort) {
	return {
		type: SELECT_SORT,
		sort
	};
}

export function selectCategory(category) {
	return {
		type: SELECT_CATEGORY,
		category	
	};
}

export function selectPost(id) {
	return {
		type: SELECT_POST,
		id
	};
}

export function votePost(id, voteText) {
	return {
		type: VOTE_POST,
		id,
		voteText
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
	return {
		type: EDIT_COMMENT,
		body,
		timeStamp: Date.now()
	};
}

export function deleteComment(id) {
	return {
		type: DELETE_COMMENT,
		id
	};
}	

