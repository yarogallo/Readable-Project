import React, {Component} from 'react';
import PropTypes from 'prop-types';

import InputForm from '../InputForm';
import TextareaForm from '../TextareaForm';

class EditPostForm extends Component{	
	constructor(props) {
		super(props);
		this.state = {};
		this.handleEditPost = this.handleEditPost.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	
	static getDerivedStateFromProps(nextProps) {
		return {
			title: nextProps.postToEdit.title,			
			body: nextProps.postToEdit.body,	
		};
	}
	
	handleInputChange(evt) {
		const value = evt.target.value;
		const name = evt.target.name;
		
		this.setState({
			[name]: value
		});
	}
	
	handleEditPost(evt) {
		evt.preventDefault();
		const {
			title,
			body
		} = this.state;
		
		if (title && body) {
			this.props.onSubmitForm(title, body);
		} else {
			this.openModal();
		}
	}
	
	render() {
		const {
			title,
			body
		} = this.state;
		return (
			<form className="col-12 col-md-10 col-lg-8" onSubmit={ evt => this.handleEditPost(evt)}>
				<InputForm name="title" label="title" value={title} onChange={this.handleInputChange} placeholder="Post title"/>
				<TextareaForm name="body" label="content" value={body} onChange={this.handleInputChange} placeholder="Post content..."/>	
				<button type="submit" datatype="edit" className="btn bg-success">save</button>
			</form>			
		);
	}
}

EditPostForm.propTypes = {
	onSubmitForm: PropTypes.func,
	postToEdit: PropTypes.object.isRequired,
};

EditPostForm.defaultProps = {
	postToEdit: {},
};

export default EditPostForm;
