import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import backIcon from './icons/left-arrow.svg';

import SortPostsMenu from '../SortPostsMenu';
import ThumbnailPostList from '../ThumbnailPostList';
import CategoryMenu from '../CategoryMenu';


function CategoryView(props) {
	const {
		currentCategory,
		visiblePostList	
	} = props;
	
	return(
		<section className="container-fluid">
			<header className="row flex-column flex-sm-row d-flex align-items-baseline bg-info">
				<nav className="col-12 col-sm-2 col-lg-1 navbar">
					<Link to="/" className="navbar-brand text-uppercase text-white bg-secondary">
						<img src={backIcon} alt="back"/>
					</Link>
				</nav>
				<h2 className="col-12 col-sm text-sm-right text-capitalize text-white">{currentCategory}</h2>			
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
	currentCategory: PropTypes.string,
	//all post in the selected category
	visiblePostList: PropTypes.array,
};

CategoryView.defaultProps = {
	currentCategory: "",
	visiblePostList: [],
};

export default CategoryView