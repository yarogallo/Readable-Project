import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import Comment from './Comment';
import AddCommentForm from './AddCommentForm';

function ListComments(props) {
	const {
		comments,
		onSubmitNewComment
	} = props;
			
	return (
		<div className="col-12 col-md-8 text-right">
			<div>
				<ul className="list-group">
					{comments.map( comment => (
						<li key={comments.id}>
							<Comment key={comment.id} comment={comment}/>
						</li>
					))}
				</ul>
			</div>
			<div>
				<a className="btn btn-link text-info text-uppercase" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
					add comment
				</a>
				<div className="collapse" id="collapseExample">
					<AddCommentForm onSubmitNewComment={onSubmitNewComment}/>
				</div>
			</div>
		</div>
	);	
}

ListComments.propTypes = {
	//all comments from specific post
	comments: PropTypes.array,
	//for add a new comment
	onSubmitNewComment: PropTypes.func
};

ListComments.defaultProps = {
	comments: [],
	onSubmitNewComment: () => {}
};

export default ListComments;