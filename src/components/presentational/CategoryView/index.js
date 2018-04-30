import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import backIcon from './icons/left-arrow.svg';

import SortPostsMenu from '../SortPostsMenu';
import ThumbnailPostList from '../ThumbnailPostList';
import CategoryMenu from '../CategoryMenu';


function CategoryView(props) {
	const {
		category,
		posts,
		categories,
		sorts,
		onSelectSort,
		onVotePost,
		path,
	} = props;
	
	return(
		<section className="container-fluid">
			<header className="row flex-column flex-sm-row d-flex align-items-baseline bg-info">
				<nav className="col-12 col-sm-2 col-lg-1 navbar">
					<Link to="/" className="navbar-brand text-uppercase text-white bg-secondary">
						<img src={backIcon} alt="back"/>
					</Link>
				</nav>
				<h2 className="col-12 col-sm text-sm-right text-capitalize text-white">{category}</h2>			
			</header>
			<section className="row bg-light">
				<SortPostsMenu onSelectSort={onSelectSort} sortValues={sorts} path={path}/>
			</section>
			<section className="row bg-light">
				<CategoryMenu categories={categories} currentCategory={category}/>
				<ThumbnailPostList posts={posts} onVotePost={onVotePost}/>				
			</section>	
		</section>
	);
}

CategoryView.propTypes = {
	//Selected Category
	category: PropTypes.string.isRequired,
	//all post in the selected category
	posts: PropTypes.array.isRequired,
	//all categories available
	categories: PropTypes.array.isRequired,
	 //al sorts value
	sorts: PropTypes.array.isRequired,
	//onSelect sort
	onSelectSort: PropTypes.func,
	//vote post
	onVotePost: PropTypes.func,
};

CategoryView.defaultProps = {
	category: "",
	posts: [],
	categories: [],
	sorts: [],
	onSelectSort: () => {},
	onVotePost: () => {},
};

export default CategoryView