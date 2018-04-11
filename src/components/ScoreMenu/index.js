import React from 'react';
import PropTypes from 'prop-types';

function ScoreMenu(props) {
	const {
		className,
		scoreValue = "5",		
	} = props;
	
	const composeClass = `score-menu ${className}`;
	return (
		<span className={composeClass}>
			<button><img src="icons/thumbs-up.svg" alt="increment score"/></button>
			<small>{scoreValue}</small>
			<button><img src="icons/thumbs-down.svg" alt="decrement score"/></button>
		</span>
	);
}

ScoreMenu.propTypes = {
	// css class
	className: PropTypes.string,
}


export default ScoreMenu;
