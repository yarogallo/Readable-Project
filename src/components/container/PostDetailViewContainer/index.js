import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
	votePostScore,
	fetchActivePost,
	fetchActiveComments
} from '../../../actions';
import PostDetailView from '../../presentational/PostDetailView';

class PostDetailViewContainer extends Component {
	componentDidMount() {
		this.props.getPost(this.props.postId);
		this.props.getComments(this.props.postId);
	}
	render() {
		const {
			post,
			comments,
			onVotePost,
			onDeletePost
		} = this.props;
		return (
			<PostDetailView 
				post={post}
				comments={comments}
				onVotePost={onVotePost}
				onDeletePost={onDeletePost}/>
		);
	}
}

function mapStateToProps(state, {match}) {
	const postId = match.params.id;
	return {
		postId: match.params.id,
		post: {...state.activePost.post},
		comments: [...state.activePost.comments]
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		getPost: id => dispatch(fetchActivePost(id)),
		getComments: id => dispatch(fetchActiveComments(id)),
		onDeletePost: () => {},
		onVotePost: (id, voteText) => dispatch(votePostScore(id, voteText)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailViewContainer);
