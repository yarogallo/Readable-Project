import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
	votePostScore,
	fetchActivePost,
	fetchActiveComments,
	deleteThisPost,
	addComment,
	editComment
} from '../../../actions';
import PostDetailView from '../../presentational/PostDetailView';

class PostDetailViewContainer extends Component {
	constructor(props) {
		super(props);
		this.handleAddCommentToPost = this.handleAddCommentToPost.bind(this);
	}
	componentDidMount() {
		this.props.getPost(this.props.match.params.id);
		this.props.getComments(this.props.match.params.id);
	}
	handleAddCommentToPost(author, body) {
		this.props.onAddNewCommentToPost(this.props.post.id, author, body);
	}
	render() {
		const {
			post,
			comments,
			onVotePost,
			onDeletePost,
			onEditPostComment
		} = this.props;
		return (
			<PostDetailView 
				post={post}
				comments={comments}
				onVotePost={onVotePost}
				onDeletePost={onDeletePost}
				onAddNewComment={this.handleAddCommentToPost}
				onEditComment={onEditPostComment}/>
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
		onAddNewCommentToPost: (parentId, author, body) => dispatch(addComment(parentId, author, body)),
		onEditPostComment: (id, body) => {
			console.log(id, body);
			dispatch(editComment(id, body))}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailViewContainer);
