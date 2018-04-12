import React from 'react';
import PropTypes from 'prop-types';

function ScoreMenu(props) {
	const {
		scoreValue = 5,		
	} = props;
	
	return (
		<span className="score-menu">
			<button><img src="icons/thumbs-up.svg" alt="increment score"/></button>
			<small>{scoreValue}</small>
			<button><img src="icons/thumbs-down.svg" alt="decrement score"/></button>
		</span>
	);
}

ScoreMenu.propTypes = {
	scoreValue: PropTypes.number,
}


export default ScoreMenu;
