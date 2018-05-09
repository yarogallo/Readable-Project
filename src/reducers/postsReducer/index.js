import {constants} from '../../actions';

const initialPosts = {
	byId: {},
	idsArr: []
};

export default function postsReducer(state=initialPosts, action) {
	switch (action.type) {
		case constants.ALL_POSTS_SUCCESS:
			return {
				byId: action.posts.reduce( (postObj, post) => {
					postObj[post.id] = postObj[post.id] || post;
					return postObj;
				}, {}),
				idsArr: action.posts.map(post => post.id)	
			};
		case constants.CHANGE_POST_SCORE:
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
		case constants.ADD_POST: 
			return {
				...state,
				byId: {
					...state.byId,
					[action.post.id]: {
						...action.post
					}
				},
				idsArr: state.idsArr.concat(action.post.id)
			};	
		case constants.DELETED_POST:
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
		case constants.SAVED_POST: 
			return {
				...state,
					byId: {
						...state.byId,
						[action.id]: {
							...state.byId[action.id],
							title: action.title,
							body: action.body,							
						}
				}
			};
		default:
			return state;
	}
}
