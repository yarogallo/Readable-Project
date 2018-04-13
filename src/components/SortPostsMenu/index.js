import React from 'react';
import PropTypes from 'prop-types';

function SortPostsMenu(props) {
	const {
		sortValues,
		onSelectedPost
	} = props;
		
	return (
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
	sortValues: PropTypes.array.isRequired,
	//action to be executed when a sort is selected
	onSelectSort: PropTypes.func
};

SortPostsMenu.defaultProps = {
	sortValues: [],
	onSelectSort: () => {}, 
};

export default SortPostsMenu;