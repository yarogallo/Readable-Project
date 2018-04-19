import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchPostComments} from '../../actions';
import ScoreMenu from '../ScoreMenu';

function ThumbnailPostList(props) {
	const {
		visiblePostList,
		onSelectPost,
		onVote,
	} = props;
	return (
		<div className="col-12 col-sm-10" role="group">
			<ul className="list-group list-group-flush">
				{ visiblePostList.map( post => (
					<li className="list-group-item post-thumbnail" key={post}>
						<Link to={`/post-details/${post.id}`} ><h5>{post.title}</h5></Link>					
						<ScoreMenu scoreValue={post.voteScore} onVote={onVote}/>
						<small className="text-info">{`comments: ${post.commentCount}`}</small>						
					</li>
				)) }
			</ul>
		</div>
	);
}

ThumbnailPostList.propTypes = {
	//all visible posts
	visiblePostList: PropTypes.array,
	//action on vote
	onVotePost: PropTypes.func,
};

ThumbnailPostList.defaultProps = {
	visiblePostList: [],
	onVotePost: () => {},
};

function mapStateToProps(state, {visiblePostList}) {
	return {
		visiblePostList
	};
}

function dispatchStateToProps(dispatch) {
	return {
		onSelectPost: (postId) => dispatch(fetchPostComments(postId))
	}
}

export default connect(mapStateToProps)(ThumbnailPostList);