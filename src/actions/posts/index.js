import uuid from '../../helper/uniqueIdGenerator.js';
import {
	getAllPosts,
	getCategoryPost,
	votePost,
	getPostDetail,
	deletePost,
	addNewPost,
	editPost,
} from '../../helper/postAPI';

import {
	ALL_POSTS_SUCCESS,
	CHANGE_POST_SCORE,
	ADD_POST,
	POST_ACTIVE_ID,
	DELETED_POST,
	SAVED_POST,
} from '../constants';

function allPostsSuccess(posts) {
	return {
		type: ALL_POSTS_SUCCESS,
		posts
	};
}

function changedPostScore(id, voteText) {
	return {
		type: CHANGE_POST_SCORE,
		id,
		voteText
	};
}

function addPostState(post) {
	return {
		type: ADD_POST,
		post,
	};
}

function postActiveId(id) {
	return {
		type: POST_ACTIVE_ID,
		id,
	};
}

function deletedPost(id) {
	return {
		type: DELETED_POST,
		id
	};
}

function savedPost(id, title, body) {
	return {
		type: SAVED_POST,
		id,
		title,
		body
	};
}

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


// all posts for a specific category
export function fetchAllPostCategory(category) {
	return dispatch => {
		getCategoryPost(category)
			.then(data => data && dispatch(allPostsSuccess(data)));
	};
}

// vote post
export function votePostScore(id, voteText) {
	return dispatch => {
		votePost(id, voteText)
			.then(data => data && dispatch(changedPostScore(id, voteText)));
	};
}

//Fetch active post detail
export function fetchActivePost(id) {
	return (dispatch, getState) => {
		const data = getState().posts.byId[id];
		if (!data) {
			getPostDetail(id)
				.then(data => data && dispatch(addPostState(data)));
		}
		dispatch(postActiveId(id));	
	};
}

//add new post
export function addThisNewPost(title, body, author, category) {
	return dispatch => {
		const newPost = {
			id: uuid(),
			timestamp: Date.now(),
			title,
			body,
			author,
			category,
		};
		addNewPost(newPost).then(result => {
			if (!result) {
				window.alert('there was a problem, try again');
			}
		});
	};
		
}

//delete post
export function deleteThisPost(id) {
	return dispatch => {
		deletePost(id)
			.then(data => data && dispatch(deletedPost(id)));
	};
}

//edit post
export function savePost(id, title, body) {
	return dispatch => {
		editPost(id, title, body)
			.then(data => data && dispatch(savedPost(id, title, body)));
		
	};
}

