import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ScoreMenu from '../ScoreMenu';

function ThumbnailPostList(props) {
	const {
		posts,
		onVotePost,
	} = props;
	return (
		<div className="col-12 col-sm-10" role="group">
			<ul className="list-group list-group-flush">
				{ posts.map( post => (
					<li className="list-group-item post-thumbnail" key={post}>
						<Link to={`/post-details/${post.id}`} ><h5>{post.title}</h5></Link>					
						<ScoreMenu scoreValue={post.voteScore} onVote={(voteText) => {
							onVotePost(post.id, voteText);
						}}/>
						<small className="text-info">{`comments: ${post.commentCount}`}</small>						
					</li>
				)) }
			</ul>
		</div>
	);
}

ThumbnailPostList.propTypes = {
	//all visible posts
	posts: PropTypes.array,
	//action on vote
	onVotePost: PropTypes.func,
};

ThumbnailPostList.defaultProps = {
	posts: [],
	onVotePost: () => {},
};

export default ThumbnailPostList;