import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import SortPostsMenu from '../SortPostsMenu';
import ThumbnailPostList from '../ThumbnailPostList';
import CategoryMenu from '../CategoryMenu';

function HomePage(props) {
	const {
		posts,
		categories,
		sorts,
		sort,
		onVotePost,
		onDeletePost
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
				<SortPostsMenu sortValues={sorts} sort={sort}/>
			</section>
			<section className="row bg-light">
				<CategoryMenu categories={categories}/>
				<ThumbnailPostList posts={posts} onVotePost={onVotePost} onDeletePost={onDeletePost}/>				
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
	//selected sort
	sort: PropTypes.string,
	//when a post is voted
	onVotePost: PropTypes.func,
	//delete a post
	onDeletePost: PropTypes.func,
};

HomePage.defaultProps = {
	posts: [],
	categories: [],
	sorts: [],
	onVotePost: () => {},
	onDeletePost: () => {},
	
};

export default HomePage;