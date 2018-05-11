import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PageHeader from '../PageHeader';
import backIcon from './icons/left-arrow.svg';
import AddPostForm from './AddPostForm';
import EditPostForm from './EditPostForm';

class AddPostView extends Component {
	render() {
		const {
			categories,
			postToEdit,
			onAddNewPost,
			onEditPost
		} = this.props;
		
		return (
			<section className="container-fluid">
				<PageHeader title={postToEdit ? "editt post": "Add new post"} linkPath="/" linkContent={<img src={backIcon} alt="back homepage icon"/>} classname="text-uppercase"/>				
				<section className="row d-flex justify-content-around bg-light text-capitalize">															
					{ postToEdit 
						? <EditPostForm postToEdit={postToEdit} categories={categories} onSubmitForm={onEditPost}/>
						: <AddPostForm categories={categories} onSubmitForm={onAddNewPost}/>
					}									
				</section>
			</section>
		);
	}
}

AddPostView.propTypes = {
	//if there is a post to edited
	postToEdit: PropTypes.object,
	//list of categories for select
	categories: PropTypes.array.isRequired,
	//edit post
	onEditPost: PropTypes.func,
	//new post
	onAddNewPost: PropTypes.func,
}

AddPostView.defaultProps = {
	categories: []
}

export default AddPostView;


