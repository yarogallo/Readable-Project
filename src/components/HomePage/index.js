import React from 'react';
import PropTypes from 'prop-types';

import SortPostsMenu from '../SortPostsMenu';
import ThumbnailPostList from '../ThumbnailPostList';
import CategoryMenu from '../CategoryMenu';


function HomePage(props) {
	const {
		className
	} = props;
	
	const composeClass = `container-fluid ${className}`;
	
	return (
		<section className={composeClass}>
			<header className="row flex-column flex-sm-row d-flex align-items-baseline home-page-header text-uppercase text-white">
				<h1 className="col-12 col-sm text-sm-center">Readable App</h1>
				<nav className="col-12 col-sm-2 col-lg-1 navbar">
					<a href="#" className="navbar-brand text-uppercase text-white">add</a>
				</nav>				
			</header>
			<section className="row bg-light">
				<SortPostsMenu/>
			</section>
			<section className="row">
				<CategoryMenu/>
				<ThumbnailPostList/>				
			</section>	
		</section>
	);
}

HomePage.protoTypes = {
	//css class
	className: PropTypes.string
}

export default HomePage;
