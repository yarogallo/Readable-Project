import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function AddPostView(props) {
	return (
		<section className="container-fluid">
			<header className="row flex-column flex-sm-row d-flex align-items-baseline bg-success">
				<nav className="col-12 col-sm-2 col-lg-1 navbar">
					<Link to="/" className="navbar-brand bg-light"><img src="icons/left-arrow.svg" alt="back home page"/></Link>
				</nav>	
				<h2 className="col-12 col-sm text-sm-center text-uppercase">Add Post</h2>			
			</header>
			<section className="row d-flex justify-content-around bg-light text-capitalize">
				<form className="col-12 col-md-10 col-lg-8">
					<div className="form-group">
						<label htmlFor="post-title">title</label>
						<input type="text" className="form-control" id="post-title" placeholder="Ex: Learning react from cero"/>
					</div>
					<div className="form-group">
						<label htmlFor="post-author">author</label>
						<input type="text" className="form-control" id="post-author" placeholder="Ex: Jonh Doe"/>
					</div>
					<div className="form-group">
						<label htmlFor="post-body">Content</label>
						<textarea type="text" className="form-control" id="post-body" placeholder="Post content...."></textarea>
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
					<button type="submit" className="btn bg-success">Submit</button>
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


