import React, {Component} from 'react';
import {connect} from 'react-redux';
import {votePostScore} from '../../../actions';
import ThumbnailPostList from '../../presentational/ThumbnailPostList';

class ThumbnailPostListContainer extends Component {
	render(){
		return(
			<ThumbnailPostList posts={this.props.posts} onVotePost={this.props.onVotePost}/>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onVotePost: (id, voteText) => dispatch(votePostScore(id, voteText))
	};
}

export default connect(null, mapDispatchToProps)(ThumbnailPostListContainer);
