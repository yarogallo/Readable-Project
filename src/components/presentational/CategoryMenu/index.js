import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function CategoryMenu(props) {
	const {
		categories,
	} = props;
	
	return(
		<nav className="col-12 col-sm-2 nav flex-column">
			<a className="nav-link text-center disabled text-uppercase" href="#catMenu">Categories:</a>
			<div id="catMenu">
				{ categories.map( category => (
					<Link className="nav-link active text-center" key={category} to={`/categories/${category}`}>{category}</Link>
				))}
			</div>
		</nav>		
	);
}

CategoryMenu.propTypes = {
	//list categories filters
	categories: PropTypes.array.isRequired,
};

CategoryMenu.defaultProps = {
	categories: [],
}

export default CategoryMenu;
