import React from 'react';
import PropTypes from 'prop-types';

function CategoryMenu(props) {
	const {
		className,
		categories=['react', 'redux', 'react-redux'],
	} = props;
	
	const composeClass = `col-12 col-sm-2 nav flex-column bg-light ${className}`;
	return(
		<nav className={composeClass}>
			<a className="nav-link text-center disabled" href="#catMenu">Categories:</a>
			<div id="catMenu">
				{ categories.map( categ => (
					<a className="nav-link active text-center" key={categ} href="#">{categ}</a>
				))}
			</div>
		</nav>		
	);
}

CategoryMenu.protoTypes = {
	className: PropTypes.string,
	categories: PropTypes.array,
}

export default CategoryMenu;
