import React from 'react';
import PropTypes from 'prop-types';

function SortPostsMenu(props) {
	const {
		sortValues=['newest', 'oldest', 'score'],
	} = props;
	
	
	return (
		// <div className="col-12 sort-menu d-flex flex-column flex-sm-row justify-content-center btn-group" role="group">
		// 	<button type="button" className="btn btn-light" disabled>Sort By: </button>
		// 	{ sortValues.map( value => (
		// 		<button type="button" key={value} className="btn btn-light">{value}</button>
		// 	)) }
		// </div>
		<div className="col-12 sort-menu d-flex flex-column flex-sm-row justify-content-end btn-group" role="group">
			<ul className="nav" id="sort-list">
				<li className="nav-item">
					<a className="nav-link disabled" href="#sort-list" disabled>Sort By:</a>
				</li>
				{ sortValues.map( value => (
					<li className="nav-item" key={value}>
						<a className="nav-link" href="#sort-list">{value}</a>
					</li>
				)) }
			</ul>
		</div>
	);
}

SortPostsMenu.propTypes = {
	//sort list criterias
	sortValues: PropTypes.array
}

export default SortPostsMenu;