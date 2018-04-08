import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function ReadablePosts(props) {
	const {
		posts,
		className,
		currentCategory ="bhabchjsgh",
	} = props;
	
	const customClass = `posts-list row ${className}`;
	
	return(
		<section className={customClass}>
			<header className="col-12">
				<h4 className="text-center text-uppercase text-muted">{`Filter By: ${currentCategory}`}</h4>
			</header>
			<ul className="col-12 list-group list-group-flush">
				{posts.map( post => ( <Post key={post.id} post={post}/> ))}
			</ul>
		</section>
	);
}

ReadablePosts.propTypes = {
	className: PropTypes.string,
	posts: PropTypes.array,
	currentCategory: PropTypes.string,
		
};

export default ReadablePosts;
