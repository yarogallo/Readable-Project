import React from 'react';
import PropTypes from 'prop-types';

function AddPostView(props) {
	return (
		<section className="container-fluid">
			<header className="row flex-column flex-sm-row d-flex align-items-baseline post-detail-header text-uppercase text-white">
				<nav className="col-12 col-sm-2 col-lg-1 navbar">
					<a href="#" className="navbar-brand"><img src="icons/left-arrow.svg"/></a>
				</nav>	
				<div className="col-12 col-sm text-sm-center text-uppercase">
					<h2>Add Post</h2>
				</div>			
			</header>
			<section className="row d-flex justify-content-around">
				<form className="col-12 col-md-10 col-lg-8">
					<div className="form-group">
						<label htmlFor="post-title">Title</label>
						<input type="text" className="form-control" id="post-title" placeholder="Enter title"/>
					</div>
					<div className="form-group">
						<label htmlFor="post-author">Author</label>
						<input type="text" className="form-control" id="post-author" placeholder="Enter name"/>
					</div>
					<div className="form-group">
						<label htmlFor="post-body">Content</label>
						<textarea type="text" className="form-control" id="post-body" placeholder="Your post content"></textarea>
					</div>
					<div className="form-group">
						<label htmlFor="category-selector">Select category</label>
						<select className="form-control" id="category-selector">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
					</div>	
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</section>
		</section>
	);
}

AddPostView.propTypes = {
	//if there is a post to edited
	postToEdit: PropTypes.object,
	//list of categories for select
	categories: PropTypes.array,
}

export default AddPostView;


