import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import logo from './icons/left-arrow.svg';

import ScoreMenu from '../ScoreMenu';
import ListComments from './ListComments';

function PostDetailView(props) {
	const {
		post,
		comments,
		onVotePost,
		onDeletePost,
		onEditPost,
	} = props;
	
	const {
		title="title",
		author="author",
		body="",
		date="date",
		voteScore,
	} = post;
	
	return (
		<section className="container-fluid">
			<header className="row flex-column flex-sm-row d-flex align-items-baseline post-detail-header text-uppercase bg-info">
				<nav className="col-12 col-sm-2 col-lg-1 navbar">
					<Link to="/" className="navbar-brand text-uppercase text-white bg-light"><img src={logo} alt="back homepage icon"/></Link>
				</nav>	
				<div className="col-12 col-sm text-sm-center">
					<h2>{title}</h2>
					<p className="lead">{`${author}-${date}`}</p>
				</div>			
			</header>
			<section className="row d-flex justify-content-around" id="post-details">
				<p className="col-12 col-md-8 lead">
					{body}
				</p>
				<div className="col-12 col-md-8 d-flex justify-content-between">
					<ScoreMenu scoreValue={voteScore}/>
					<div className="btn-group text-capitalize" role="group">
						<Link className="btn text-info" to="/AddPostView">edit</Link>
						<a className="btn text-info" href="#post-details">delete</a>
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
	//comments relared with the post
	comments: PropTypes.array,
	//vote for the post
	onVotePost: PropTypes.func,
	//delete the post
	onDeletePost: PropTypes.func,
	//edit the current post
	onEditPost: PropTypes.func,
};

PostDetailView.defaultProps = {
	post: {},
	comments: [],
	onVotePost: () => {},
	onDeletePost: () => {},
	onEditPost: () => {},
};

export default PostDetailView;
