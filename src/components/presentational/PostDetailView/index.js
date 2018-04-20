import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import logo from './icons/left-arrow.svg';

import ScoreMenu from '../ScoreMenu';
import ListComments from './ListComments';

function getPostDate(timestamp) {
	const postDate = new Date(timestamp);
	return `${postDate.getMonth()}/${postDate.getDate()}/${postDate.getFullYear()}`;
}

function PostDetailView(props) {
	const {
		post,
		comments,
		onVotePost,
		onDeletePost,
	} = props;
	const postDate = getPostDate(post.timestamp);
	return (
		<section className="container-fluid">
			<header className="row flex-column flex-sm-row d-flex align-items-baseline post-detail-header text-uppercase bg-info">
				<nav className="col-12 col-sm-2 col-lg-1 navbar">
					<Link to="/" className="navbar-brand text-uppercase text-white bg-light"><img src={logo} alt="back homepage icon"/></Link>
				</nav>	
				<div className="col-12 col-sm text-sm-center">
					<h2>{post.title}</h2>
					<p className="lead">{`By: ${post.author} `}<small className="text-muted">{`${postDate}`}</small></p>
				</div>			
			</header>
			<section className="row d-flex justify-content-around" id="post-details">
				<p className="col-12 col-md-8 lead">
					{post.body}
				</p>
				<div className="col-12 col-md-8 d-flex justify-content-between">
					<ScoreMenu scoreValue={post.voteScore} onVote={(voteText) => {
						debugger;
						onVotePost(post.id, voteText);
					}}/>
					<div className="btn-group text-capitalize" role="group">
						<Link className="btn text-info" to={`/add-post/${post.id}`}>edit</Link>
						<a className="btn text-info" href="#post-details" onClick={() => {
							onDeletePost();	
						}}>delete</a>
					</div>
				</div>
			</section>
			<section className="row d-flex justify-content-around">	
				<ListComments comments={comments}/>
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
};

PostDetailView.defaultProps = {
	post: {},
	comments: [],
	onVotePost: () => {},
	onDeletePost: () => {}
};

export default PostDetailView;
