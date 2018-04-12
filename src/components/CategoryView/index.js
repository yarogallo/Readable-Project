import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import SortPostsMenu from '../SortPostsMenu';
import ThumbnailPostList from '../ThumbnailPostList';
import CategoryMenu from '../CategoryMenu';


function CategoryView(props) {
	const {
		category="category name",
		visiblePostList	
	} = props;
	
	return(
		<section className="container-fluid">
			<header className="row flex-column flex-sm-row d-flex align-items-baseline category-page-header bg-info">
				<nav className="col-12 col-sm-2 col-lg-1 navbar">
					<Link to="/" className="navbar-brand text-uppercase text-white bg-light"><img src="icons/left-arrow.svg" alt="back"/></Link>
				</nav>
				<h1 className="col-12 col-sm text-sm-right text-capitalize text-white">{category}</h1>			
			</header>
			<section className="row bg-light">
				<SortPostsMenu/>
			</section>
			<section className="row bg-light">
				<CategoryMenu/>
				<ThumbnailPostList visiblePostList={visiblePostList}/>				
			</section>	
		</section>
	);
}

CategoryView.propTypes = {
	//Selected Category
	category: PropTypes.string,
	//all post in the selected category
	visiblePostList: PropTypes.array,
}

export default CategoryView