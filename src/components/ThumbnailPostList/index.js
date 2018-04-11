import React from 'react';
import PropTypes from 'prop-types';

import ScoreMenu from '../ScoreMenu';

function ThumbnailPostList(props) {
	const {
		className,
		visiblePostList = [1,2,3],
		onSelectPost	
	} = props;
	
	const composeClass = `col-12 col-sm-10 ${className}`;
	
	return (
		<div className={composeClass} role="group">
			<ul className="list-group list-group-flush">
				{ visiblePostList.map( post => (
					<li className="list-group-item" key={post}>
						<a href="#"><h5>Cras justo odio</h5></a>					
						<ScoreMenu/>
						<small>comments: 5</small>						
					</li>
				)) }
			</ul>
		</div>
	);
}

ThumbnailPostList.protoTypes = {
	//css class
	className: PropTypes.string,
	//all visible posts
	visiblePostList: PropTypes.array,
	//call on select post
	onSelectPost: PropTypes.func,	
}

export default ThumbnailPostList;