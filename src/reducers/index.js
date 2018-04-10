import { combineReducers } from 'redux';
import { allSortCriteria, 
		FILTER_POSTS, 
		ADD_POST,
		SORT_POSTS,
		VOTE_POST_SCORE,
	  } from '../actions';

const initialPost = {
	postIds: []
};

function posts( state=initialPost, action ) {
	switch (action.type) {
		
		case ADD_POST:
			return{...state,
				[action.id]: {
					id: action.id,
					timestamp: action.timestamp,
					title: action.title,
					body: action.body,
					author: action.author,
					category: action.category,
					voteScore: 1,
					deleted: false,
				},
			postIds: state.postIds.concat(action.id)
			};
			
		case VOTE_POST_SCORE: 
			const currentScore = state[action.id].voteScore;
			return {...state,
					[action.id]: {...state[action.id],
								VoteScore: action.vote === 'up' ?
								currentScore + 1 :
								currentScore - 1 
					}
			} 	
		default:
			return state;
	}	
}



function sortBy( state=allSortCriteria.none, action ) {
	switch (action.type) {
		case SORT_POSTS:			
			return action.sortCriteria;	
		default:
			return state;
	}	
}

function currentCategory( state="", action ) {
	switch (action.type) {
		case FILTER_POSTS:			
			return action.category;	
		default:
			return state;
	}
}

export default combineReducers({
	posts,	
	sortBy,
	currentCategory,
});


