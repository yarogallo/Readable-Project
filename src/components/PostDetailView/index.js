import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ScoreMenu from '../ScoreMenu';
import ListComments from './ListComments';

function PostDetailView(props) {
	const {
		post,
		comments=[1, 2, 3],
	} = props;
	
	return (
		<section className="container-fluid">
			<header className="row flex-column flex-sm-row d-flex align-items-baseline post-detail-header text-uppercase bg-info">
				<nav className="col-12 col-sm-2 col-lg-1 navbar">
					<Link to="/" className="navbar-brand text-uppercase text-white bg-light"><img src="icons/left-arrow.svg" alt="back homepage icon"/></Link>
				</nav>	
				<div className="col-12 col-sm text-sm-center">
					<h2>Title</h2>
					<p className="lead">author-time</p>
				</div>			
			</header>
			<section className="row d-flex justify-content-around ">
				<p className="col-12 col-md-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
					Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh 
					elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed 
					augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent 
					taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
					Curabitur sodales ligula in libero. 
				</p>
				<div className="col-12 col-md-8 d-flex justify-content-between">
					<ScoreMenu/>
					<div className="btn-group text-capitalize" role="group">
						<Link className="btn text-info" to="/AddPostView">edit</Link>
						<a className="btn text-info" href="#">delete</a>
					</div>
				</div>
			</section>
			<section className="row d-flex justify-content-around">	
				<ListComments comments={comments}/>
			</section>
		</section>
	);
}

PostDetailView.propTypes = {
	//post to display
	post: PropTypes.object,
	//comments relared with the post
	comments: PropTypes.array
};

export default PostDetailView;
