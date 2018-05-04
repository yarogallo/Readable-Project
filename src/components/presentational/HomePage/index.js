import React from 'react';
import PropTypes from 'prop-types';

import PageHeader from '../PageHeader';
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
			<PageHeader title="readable app" linkPath="/add-post" linkContent="add" classname="text-uppercase"/>
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