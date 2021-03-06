import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import logo from './icons/left-arrow.svg';

import PageHeader from '../PageHeader';
import ScoreMenu from '../ScoreMenu';
import DeleteButton from '../DeleteButton';
import ListComments from './ListComments';
import formatData from '../../../helper/formatDate';


function PostDetailView({post, comments, onVotePost, onAddNewComment, onEditComment, onDeleteComment, onVoteComment, onDeletePost}) {
	return (
		<section className="container-fluid">
			<PageHeader title={post.title} linkPath="/" linkContent={<img src={logo} alt="back homepage icon"/>} classname="font-weight-light"/>
			<section className="row d-flex justify-content-around" id="post-details">
				<div className="col-12 col-md-8">
					<p className="text-capitalize lead">{`${post.author} `}<small className="text-muted">{`${formatData(post.timestamp)}`}</small></p>
					<p>{post.body}</p>
				</div>
				<div className="col-12 col-md-8">
					<ScoreMenu scoreValue={post.voteScore} onVote={voteText => onVotePost(post.id, voteText)}/>
					<Link className="btn text-link" to={`/edit-post/${post.id}`}>edit</Link>
					<DeleteButton onDelete={() => onDeletePost(post.id)} path="/" text="Want delete this post"/>
					<p className="text-info d-inline">{`comments: ${comments.length}`}</p>
				</div>
			</section>
			<section className="row d-flex justify-content-around">	
				<ListComments 
					comments={comments} 
					addNewComment={onAddNewComment}
					editComment={onEditComment}
					deleteComment={onDeleteComment}
					voteComment={onVoteComment}/>
			</section>
		</section>
		);

	
}

PostDetailView.propTypes = {
	//post to display
	post: PropTypes.object.isRequired,
	//comments related to that post
	comments: PropTypes.array.isRequired,
	//vote for the post
	onVotePost: PropTypes.func,
	//delete the post
	onDeletePost: PropTypes.func,
	//add new comment to the active post
	onAddNewComment: PropTypes.func,
	//edit an existent comment
	onEditComment: PropTypes.func,
	//delete a comment
	onDeleteComment: PropTypes.func,
	//vote comment
	onVoteComment: PropTypes.func
};

PostDetailView.defaultProps = {
	post: {},
	comments: [],
	onVotePost: () => {},
	onDeletePost: () => {},
	onAddNewComment: () => {},
	onEditComment: () => {},
	onDeleteComment: () => {},
	onVoteComment: () => {},
};

export default PostDetailView;
