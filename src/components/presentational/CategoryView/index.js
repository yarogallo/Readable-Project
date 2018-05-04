import React from 'react';
import PropTypes from 'prop-types';
import backIcon from './icons/left-arrow.svg';

import PageHeader from '../PageHeader';
import SortPostsMenu from '../SortPostsMenu';
import ThumbnailPostList from '../ThumbnailPostList';
import CategoryMenu from '../CategoryMenu';


function CategoryView(props) {
	const {
		category,
		posts,
		categories,
		sorts,
		sort,
		onVotePost,
		path,
		onDeletePost
	} = props;
	
	return(
		<section className="container-fluid">
			<PageHeader title={category} linkPath="/" linkContent={<img src={backIcon} alt="back" />} classname="text-uppercase"/>
			<section className="row bg-light">
				<SortPostsMenu sort={sort} sortValues={sorts} path={path}/>
			</section>
			<section className="row bg-light">
				<CategoryMenu categories={categories} currentCategory={category}/>
				{posts.length
					? <ThumbnailPostList posts={posts} onVotePost={onVotePost} onDeletePost={onDeletePost}/>
					: <div className="col-12 col-sm-10" role="group">
							<p className="text-danger text-uppercase text-center">{`Sorry, no posts in ${category} category`}</p>
						</div>}				
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
	//selected sort
	sort: PropTypes.string,
	//vote post
	onVotePost: PropTypes.func,
	//on delete a post
	onDeletePost: PropTypes.func,
};

CategoryView.defaultProps = {
	category: "",
	posts: [],
	categories: [],
	sorts: [],
	onVotePost: () => {},
	onDeletePost: () => {},
};

export default CategoryView