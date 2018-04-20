import React from 'react';
import PropTypes from 'prop-types';
import down from './icons/thumbs-down.svg';
import up from './icons/thumbs-up.svg';

function ScoreMenu(props) {
	const {
		scoreValue,
		onVote,
	} = props;
	
	return (
		<span className="score-menu">
			<button><img src={up} alt="increment score" onClick={ () => {
				onVote("upVote");
			}}/></button>
			<small>{scoreValue}</small>
			<button><img src={down} alt="decrement score" onClick={() => {
				onVote("downVote");
			}}/></button>
		</span>
	);
}

ScoreMenu.propTypes = {
	//score value
	scoreValue: PropTypes.number,
	//to be call on vote
	onVote: PropTypes.func,
};

ScoreMenu.defaultProps = {
	scoreValue: 1,
	onVote: () => {},
};


export default ScoreMenu;
