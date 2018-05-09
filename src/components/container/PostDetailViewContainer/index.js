import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postActions, commentsActions} from '../../../actions';
import PostDetailView from '../../presentational/PostDetailView';
import PageNotFound from '../../presentational/PageNotFound';

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
			onEditPostComment,
			onDeletePostComment,
			onVoteComment
		} = this.props;
		
		return (
			Object.keys(post).length === 0
				? <PageNotFound title="Page not found" body="the current post does not exist"/>
				: <PostDetailView 
					post={post}
					comments={comments}
					onVotePost={onVotePost}
					onDeletePost={onDeletePost}
					onAddNewComment={this.handleAddCommentToPost}
					onEditComment={onEditPostComment}
					onDeleteComment={onDeletePostComment}
					onVoteComment={onVoteComment}/>
		);
	}
}

function mapStateToProps({activePost, posts}, {match}) {
	const currentComments = activePost.idsCommentsArr.reduce( (acc, commentId) => {	
		!activePost.comments[commentId].deleted && acc.push(activePost.comments[commentId]);
		return acc;
	}, []);
	return {
		post: {...posts.byId[match.params.id]},
		comments: currentComments,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getPost: id => dispatch(postActions.fetchActivePost(id)),
		onDeletePost: id => dispatch(postActions.deleteThisPost(id)),
		onVotePost: (id, voteText) => dispatch(postActions.votePostScore(id, voteText)),
		getComments: id => dispatch(commentsActions.fetchActiveComments(id)),
		onAddNewCommentToPost: (parentId, author, body) => dispatch(commentsActions.addComment(parentId, author, body)),
		onEditPostComment: (id, body) => dispatch(commentsActions.editComment(id, body)),
		onDeletePostComment: id => dispatch(commentsActions.deleteComment(id)),
		onVoteComment: (id, voteText) => dispatch(commentsActions.voteCommentScore(id, voteText))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailViewContainer);
