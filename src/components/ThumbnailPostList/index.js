import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ScoreMenu from '../ScoreMenu';

function ThumbnailPostList(props) {
	const {
		visiblePostList = [1,2,3],
		onSelectPost,
		onVote,
	} = props;
	
	return (
		<div className="col-12 col-sm-10" role="group">
			<ul className="list-group list-group-flush">
				{ visiblePostList.map( post => (
					<li className="list-group-item post-thumbnail" key={post}>
						<Link to="/PostDetailView"><h5>this is the post title</h5></Link>					
						<ScoreMenu/>
						<small className="text-info">comments: 5</small>						
					</li>
				)) }
			</ul>
		</div>
	);
}

ThumbnailPostList.propTypes = {
	//all visible posts
	visiblePostList: PropTypes.array,
	//action to be executed when post is selected
	onSelectPost: PropTypes.func,
	//action on vote
	onVote: PropTypes.func,
}

export default ThumbnailPostList;