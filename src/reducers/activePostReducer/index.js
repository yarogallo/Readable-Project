import {constants} from '../../actions';

const initialActivePost = {
	postId: '',
	comments: {},
	idsCommentsArr: [],
};

export default function activePostReducer(state=initialActivePost, action) {
	switch (action.type) {
		case constants.POST_ACTIVE_ID:
			return {
				...state,
				postId: action.id
			};
		case constants.POST_ACTIVE_COMMENTS:
			return {
				...state,
				comments: action.comments.reduce( (acc, comment) => {
					 acc[comment.id] = comment;
					 return acc;
				}, {}),
				idsCommentsArr: action.comments.map( comment => comment.id)
			};
		case constants.DELETED_POST: 
			return {
				...initialActivePost
			};
		case constants.ADDED_COMMENT:
			return {
				...state,
				comments: {
					...state.comments,
					[action.comment.id]: action.comment
				},
				idsCommentsArr: [...state.idsCommentsArr, action.comment.id]
			};
		case constants.EDITED_COMMENT: 
			return {
				...state,
				comments: {
					...state.comments,
					[action.id]: {
						...state.comments[action.id],
						body: action.body,
						timestamp: action.timestamp
					}
				}
			}
		case constants.DELETED_COMMENT: 
			return {
				...state,
				comments: {
					...state.comments,
					[action.id]: {
						...state.comments[action.id],
						deleted: true
					}
				}
			};
		case constants.CHANGE_COMMENT_SCORE:
			return {
				...state,
				comments: {
					...state.comments,
					[action.id]: {
						...state.comments[action.id],
						voteScore: action.voteText === "upVote" 
							? state.comments[action.id].voteScore + 1 
							: state.comments[action.id].voteScore - 1
					}
				}
			};	
		default:
			return state;
	}
}