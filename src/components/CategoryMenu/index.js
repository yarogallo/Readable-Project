import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function CategoryMenu(props) {
	const {
		postCategories,
		onSelectCategory
	} = props;
	
	return(
		<nav className="col-12 col-sm-2 nav flex-column">
			<a className="nav-link text-center disabled text-uppercase" href="#catMenu">Categories:</a>
			<div id="catMenu">
				{ postCategories.map( category => (
					<Link className="nav-link active text-center" key={category} to="/categories">{category}</Link>
				))}
			</div>
		</nav>		
	);
}

CategoryMenu.propTypes = {
	//list categories filters
	postCategories: PropTypes.array.isRequired,
	//To be executed when a category is selected
	onSelectCategory: PropTypes.func
};

CategoryMenu.defaultProps = {
	postCategories: [],
	onSelectCategory: () => {}
}

export default CategoryMenu;
