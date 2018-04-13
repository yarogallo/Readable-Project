import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';


function ListComments(props) {
	const {
		listComments
	} = props;
	
	return (
		<div className="col-12 col-md-8 text-right">
			<div>
				<ul className="list-group">
					{listComments.map( comment => (
						<Comment key={comment.id} comment={comment}/>
					))}
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
	listComments: PropTypes.array,
};

ListComments.defaultProps = {
	listComments: [{
		body: "esto es pa probar lmkljhgjhkftygfgcr mjkhbufjyt  terscydurtyf  ytuiyguyghiuh ty ftudtrdrt yitrvftyrvuytr uyguyviyg",
		author: "me",
		voteScore: 10,
	}],
};

export default ListComments;
