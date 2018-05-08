import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ScoreMenu from '../ScoreMenu';
import DeleteButton from '../DeleteButton';

function ThumbnailPostList(props) {
	const {
		posts,
		onVotePost,
		onDeletePost,
	} = props;
	
	return (
		<div className="col-12 col-sm-10" role="group">
			<ul className="list-group list-group-flush">
				{ posts.map( post => (
					<li className="list-group-item post-thumbnail" key={post.id}>
						<div>
							<Link to={`/category/${post.category}/post/${post.id}`} ><h5 className="d-inline">{post.title}</h5></Link>
							<small className="text-muted text-capitalize">{` by: ${post.author}`}</small>
						</div>					
						<div>
							<ScoreMenu scoreValue={post.voteScore} onVote={voteText => onVotePost(post.id, voteText)}/>
							<DeleteButton onDelete={() => onDeletePost(post.id)} text="Want delete this post?"/>
							<Link className="btn text-link" to={`/edit-post/${post.id}`}>edit</Link>		
							<p className="text-info d-inline">{`comments: ${post.commentCount}`}</p>	
						</div>				
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
	//action on Delete
	onDeletePost: PropTypes.func,
};

ThumbnailPostList.defaultProps = {
	posts: [],
	onVotePost: () => {},
	onDeletePost: () => {},
};

export default ThumbnailPostList;