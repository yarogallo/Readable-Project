import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function CategoryMenu(props) {
	const {
		categories,
		currentCategory
	} = props;
	const createLink = function(category) {
		return (category === currentCategory 
			? <Link className="nav-link active text-center text-danger" key={category} to={`/categories/${category}`}>{category}</Link>
			: <Link className="nav-link active text-center" key={category} to={`/categories/${category}`}>{category}</Link>
		);
	}
	
	return(
		<nav className="col-12 col-sm-2 nav flex-column">
			<p className="nav-link text-center text-uppercase text-muted">Categories:</p>
			<div id="catMenu">
				{categories.map( category => createLink(category))}
			</div>
		</nav>		
	);
}

CategoryMenu.propTypes = {
	//list categories filters
	categories: PropTypes.array.isRequired,
	//selected category
	currentCategory: PropTypes.string
};

CategoryMenu.defaultProps = {
	categories: [],
	currentCategory: ''
}

export default CategoryMenu;
