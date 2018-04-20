import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
	votePostScore,
	fetchActivePost,
	fetchActiveComments,
	deleteThisPost
} from '../../../actions';
import PostDetailView from '../../presentational/PostDetailView';

class PostDetailViewContainer extends Component {
	componentDidMount() {
		this.props.getPost(this.props.match.params.id);
		this.props.getComments(this.props.match.params.id);
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

function mapStateToProps(state) {
	const allPosts = state.posts.byId;
	return {
		post: {...allPosts[state.activePost.postId]},
		comments: [...state.activePost.comments]
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getPost: id => dispatch(fetchActivePost(id)),
		getComments: id => dispatch(fetchActiveComments(id)),
		onDeletePost: id => dispatch(deleteThisPost(id)),
		onVotePost: (id, voteText) => dispatch(votePostScore(id, voteText)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailViewContainer);
