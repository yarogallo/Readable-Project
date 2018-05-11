import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-modal';
import InputForm from '../InputForm';
import TextareaForm from '../TextareaForm';
import SelectForm from '../SelectForm';

class AddPostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			author: '',
			body: '',
			category: this.props.categories[0],
			isOpenModal: false,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
	}
	
	static getDerivedStateFromProps(nextProps) {
		return {
			category: nextProps.categories[0]	
		};
	}
	
	handleInputChange(evt) {
		const value = evt.target.value;
		const name = evt.target.name;
		
		this.setState({
			[name]: value
		});
	}
	
	closeModal() {
		this.setState({
			isOpenModal: false
		});
	}
	
	openModal() {
		this.setState({
			isOpenModal: true
		});
	}
	
	handleAddNewPost(evt) {
		const {
			title,
			author,
			body,
			category
		} = this.state;

		if(title && body && author && category) {
			this.props.onSubmitForm(title, body, author, category);
		} else {
			this.openModal();
		}
		evt.preventDefault();
	}
	
	render() {
		const {
			title,
			author,
			body,
			category
		} = this.state;
		return (
			<form className="col-12 col-md-10 col-lg-8" onSubmit={evt => this.handleAddNewPost(evt)}>
				<InputForm name="title" label="title" value={title} onChange={this.handleInputChange} placeholder="Post title"/>
				<TextareaForm name="body" label="content" value={body} onChange={this.handleInputChange} placeholder="Post content..."/>	
				<SelectForm name="category" label="categories" value={category} options={this.props.categories} onChange={this.handleInputChange}/>
				<InputForm name="author" label="author" value={author} onChange={this.handleInputChange} placeholder="John Doe"/>
				<button type="submit" datatype="edit" className="btn bg-success">Submit</button>
				<Modal isOpen={this.state.isOpenModal} onRequestClose={this.closeModal} className="modal-dialog"> 
					<div className="modal-content">
						<h3 className="modal-title">No empty field are allowed</h3>
						<button onClick={this.closeModal} className="btn btn-info">Ok</button>
					</div>
				</Modal>
			</form>			
		);
	}
}

AddPostForm.propTypes = {
	onSubmitForm: PropTypes.func,
	categories: PropTypes.array,
};

export default AddPostForm;
