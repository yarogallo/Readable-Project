
export const FILTER_POSTS = 'FILTER_POSTS';
export const SORT_POSTS = 'SORT_POSTS';
export const ADD_POST = 'ADD_POST';
export const SELECT_POST = 'SELECT_POST';
export const VOTE_POST_SCORE = 'VOTE_POST_SCORE';

export const allSortCriteria =  {
	none: 'NONE',
	score: 'VOTE_SCORE',
	time: 'TIME_STAMP'
};

let currentIndex = 0;
const generateId = text => `${text.split(" ").join("").toLowerCase()}-${currentIndex++}`;
//action creators 

function filterPosts( category ) {
	return {
		type: FILTER_POSTS,
		category
	};
}

function sortPosts( sortCriteria ) {
	return {
		type: SORT_POSTS,
		sortCriteria
	};
}

function addPost( title, body, author, category ) {
	return {
		type: ADD_POST,
		id: generateId(title),
		title,
		body,
		author,
		category,
		timestamp: Date.now(),
	};
} 

function selectPost( id ) {
	return {
		type: SELECT_POST,
		id
	};
}

function votePostScore( id, vote ) {
	return {
		type: VOTE_POST_SCORE,
		id,
		vote
	};
}

export {filterPosts, sortPosts, addPost, selectPost, votePostScore};

