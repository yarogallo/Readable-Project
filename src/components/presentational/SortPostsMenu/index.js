import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function SortPostsMenu(props) {
	const {
		sortValues,
		sort,
		path
	} = props;
	
	return (
		<div className="col-12 sort-menu d-flex flex-column flex-sm-row justify-content-end btn-group" role="group">
			<ul className="nav" id="sort-list">
				<li className="nav-item">
					<p className="nav-link disabled">Sort By:</p>
				</li>
				<li className="nav-item" >
						<Link className={sort ? "nav-link" : "nav-link text-danger" } to={`${path}`}>none</Link>
					</li>
				{ sortValues.map( value => (
					<li className="nav-item" key={value} >
						<Link className={sort === value ? "nav-link text-danger" : "nav-link"} to={`${path}/sort-by/${value}`}>{value}</Link>
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
	sort: PropTypes.string,
	//path to Link component
	path: PropTypes.string.isRequired,
};

SortPostsMenu.defaultProps = {
	sortValues: [],
	path: "" 
};

export default SortPostsMenu;