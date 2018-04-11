import React from 'react';
import PropTypes from 'prop-types';

function SortPostsMenu(props) {
	const {
		className,
		sortValues=['newest', 'oldest', 'score'],
	} = props;
	
	const composeClass = `col-12 sort-menu d-flex flex-column flex-sm-row btn-group border-bottom ${className}`;
	
	return (
		<div className={composeClass} role="group">
			<button type="button" className="btn btn-light" disabled>Sort Posts By: </button>
			{ sortValues.map( value => (
				<button type="button" key={value} className="btn btn-light">{value}</button>
			)) }
		</div>
	);
}

SortPostsMenu.protoTypes = {
	//css class
	className: PropTypes.string,
	//sort list criterias
	sortValues: PropTypes.array
}

export default SortPostsMenu;