import React from 'react';
import PropTypes from 'prop-types';

function SortPostsMenu(props) {
	const {
		sortValues=['newest', 'oldest', 'score'],
	} = props;
	
	
	return (
		<div className="col-12 sort-menu d-flex flex-column flex-sm-row btn-group" role="group">
			<button type="button" className="btn btn-light" disabled>Sort Posts By: </button>
			{ sortValues.map( value => (
				<button type="button" key={value} className="btn btn-light">{value}</button>
			)) }
		</div>
	);
}

SortPostsMenu.propTypes = {
	//sort list criterias
	sortValues: PropTypes.array
}

export default SortPostsMenu;