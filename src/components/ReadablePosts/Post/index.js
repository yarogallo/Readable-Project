import React from 'react';
import PropTypes from 'prop-types';


function Post(props) {
	const {
		post,
		onUpScore,
		onDownScore,
		onSelectPost,
		className
	} = props;
	
	const customClass = `list-group-item post-info ${className}`;

	return (
		<li className={customClass}>
			<a href="#">{post.title}</a>
			<div>
				<span>
					{`by: ${post.author}`}
				</span>
				<span className="score float-right">
					<button type="button"><img src="icons/thumbs-up.svg"/></button>
						{post.voteScore}
					<button type="button"><img src="icons/thumbs-down.svg"/></button>
				</span>
				<span className="nro-comments float-right">
					{`comments: ${post.comments}`}
				</span>
			</div>
		</li>
	);
}

Post.propTypes = {
	className: PropTypes.string,
	onUpScore: PropTypes.func,
	onDownScore: PropTypes.func,
	onSelectPost: PropTypes.func,
	post: PropTypes.object,	
};

export default Post;
