import React from 'react';
import PropTypes from 'prop-types';

import ScoreMenu from '../../../ScoreMenu';

function Comment(props) {
	const {
		comment
	} = props;
	
	return (
		<li className="list-group-item d-flex flex-column flex-sm-row justify-content-between">
			<div className="border-top-0 text-left">							
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
				<b><u className="text-capitalize text-info">by: yanita</u></b></p>
				<ScoreMenu/>							
			</div>
			<div className="btn-group d-flex flex-sm-column" role="group">
				<a className="btn" href="#"><img src="icons/edit.svg" alt="edit comment icon"/></a>
				
				<a className="btn" href="#" onClick={() => {	
					window.confirm('Shure you want delete this comment???');
				}}><img src="icons/remove.svg" alt="delete comment icon"/></a>
			</div>
		</li>
	);
}

Comment.propTypes = {
	//comment
	comment: PropTypes.array
}

export default Comment;
