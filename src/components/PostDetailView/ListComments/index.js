import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';


function ListComments(props) {
	const {comments} = props;
	return(
		<div className="col-12 col-md-8 text-right">
			<div>
				<ul className="list-group">
					<Comment/>
					<Comment/>
					<Comment/>
					<Comment/>
				</ul>
			</div>
			<div>
				<a className="btn btn-link text-info text-uppercase" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
					add comment
				</a>
				<div className="collapse" id="collapseExample">
					<form>
						<div className="form-group">
							<label className="float-left" htmlFor="input-author">author</label>
							<input type="text" className="form-control" id="input-author" placeholder="author name"/>					
						</div>
						<div className="form-group">
							<label className="float-left" htmlFor="input-comment">Comment</label>
							<textarea type="text" className="form-control" id="input-comment" placeholder="comment..."></textarea>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
}

ListComments.propTypes = {
	//all comments from specific post
	comments: PropTypes.array
}

export default ListComments;
