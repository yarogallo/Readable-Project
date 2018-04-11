import React from 'react';
import PropTypes from 'prop-types';

import SortPostsMenu from '../SortPostsMenu';
import ThumbnailPostList from '../ThumbnailPostList';
import CategoryMenu from '../CategoryMenu';


function HomePage(props) {
	const {
		visiblePostList
	} = props;
	
	return (
		<section className="container-fluid">
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
				<ThumbnailPostList visiblePostList={visiblePostList}/>				
			</section>	
		</section>
	);
}

HomePage.propTypes = {
	//posts to display
	visiblePostList: PropTypes.array
}

export default HomePage;
