import uuid from '../../helper/uniqueIdGenerator.js';
import {
	getPostComments,
	deletePostComment,
	addCommentToPost,
	editCommentDetail,
	voteComment,
} from '../../helper/postAPI';

import {
	POST_ACTIVE_COMMENTS,
	ADDED_COMMENT,
	EDITED_COMMENT,
	DELETED_COMMENT,
	CHANGE_COMMENT_SCORE
} from '../constants';

function postActiveComments(comments) {
	return {
		type: POST_ACTIVE_COMMENTS,
		comments,
	};
}

function addedComment(comment) {
	return {
		type: ADDED_COMMENT,
		comment
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

function commentDeleted(id) {
	return {
		type: DELETED_COMMENT,
		id
	};
}

function changeCommentScore(id, voteText) {
	return {
		type: CHANGE_COMMENT_SCORE,
		id,
		voteText	
	};
}

//fetch comments of an active post
export function fetchActiveComments(id) {
	return dispatch => {
		getPostComments(id)
			.then(data => dispatch(postActiveComments(data)));
	};
}

//add a comment to active post
export function addComment(parentId, author, body) {
	const comment = {
		id: uuid(),
		voteScore: 1,
		timestamp: Date.now(),
		body,
		author,
		parentId,
		deleted: false,
		parentDeleted: false
	};
	return dispatch => {
		addCommentToPost(comment)
			.then(result => result && dispatch(addedComment(comment)));
	};
}

//edit an existent comment
export function editComment(id, body) {
	return dispatch => {
		const timestamp = Date.now();
		editCommentDetail(id, timestamp, body)
			.then((result) =>  {
				return result && dispatch(editedComment(id, timestamp, body));
			});
	};
}

// delete a comment
export function deleteComment(id) {
	return dispatch => {
		deletePostComment(id)
			.then(data => data && dispatch(commentDeleted(id)));
	};
}

//vote comment
export function voteCommentScore(id, voteText) {
	return dispatch => {
		voteComment(id, voteText)
			.then( data => data && dispatch(changeCommentScore(id, voteText)));
	};
}


