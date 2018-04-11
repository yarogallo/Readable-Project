import React from 'react';
import PropTypes from 'prop-types';

import ScoreMenu from '../ScoreMenu';

function ThumbnailPostList(props) {
	const {
		visiblePostList = [1,2,3],
		onSelectPost	
	} = props;
	
	return (
		<div className="col-12 col-sm-10" role="group">
			<ul className="list-group list-group-flush">
				{ visiblePostList.map( post => (
					<li className="list-group-item post-thumbnail" key={post}>
						<a href="#"><h5>Cras justo odio</h5></a>					
						<ScoreMenu/>
						<small>comments: 5</small>						
					</li>
				)) }
			</ul>
		</div>
	);
}

ThumbnailPostList.propTypes = {
	//all visible posts
	visiblePostList: PropTypes.array,
	//call on select post
	onSelectPost: PropTypes.func,	
}

export default ThumbnailPostList;