import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import SortPostsMenu from '../SortPostsMenu';
import ThumbnailPostListContainer from '../../container/ThumbnailPostListContainer';
import CategoryMenu from '../CategoryMenu';


function HomePage(props) {
	const {
		posts,
		categories,
		sorts,
		onSelectSort,
	} = props;
	return (
		<section className="container-fluid">
			<header className="row flex-column flex-sm-row d-flex align-items-baseline home-page-header text-uppercase text-white bg-primary">
				<h1 className="col-12 col-sm">Readable App</h1>
				<nav className="col-12 col-sm-2 col-lg-1 navbar">
					<Link to="/add-post" className="navbar-brand text-uppercase text-white bg-success">add</Link>
				</nav>				
			</header>
			<section className="row bg-light">
				<SortPostsMenu sortValues={sorts} onSelectSort={onSelectSort}/>
			</section>
			<section className="row bg-light">
				<CategoryMenu categories={categories}/>
				<ThumbnailPostListContainer posts={posts}/>				
			</section>	
		</section>
	);

}

HomePage.propTypes = {
	//posts to display
	posts: PropTypes.array.isRequired,
	//all post categories
	categories: PropTypes.array.isRequired,
	//sort criterias list
	sorts: PropTypes.array.isRequired,
	//when a sort value is selected
	onSelectSort: PropTypes.func,
	//when a post is voted
	onVotePost: PropTypes.func
};

HomePage.defaultProps = {
	posts: [],
	categories: [],
	sorts: [],
	onSelectSort: () => {},
};

export default HomePage;