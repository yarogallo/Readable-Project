import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

class AddCommentForm extends Component {
	constructor(){
		super();
		this.state = {
			author: '',
			body: '',
			isModalOpen: false	
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	resetValues() {
		this.setState({
			author: '',
			body: ''
		});	
	}
	
	closeModal() {
		this.setState({
			isModalOpen: false
		});
	}
	
	openModal() {
		this.setState({
			isModalOpen: true
		});
	}
	
	handleSubmit(evt) {
		if (this.state.author && this.state.body) {
			this.props.onSubmitForm( this.state.author, this.state.body);
			this.resetValues();
		} else {
			this.openModal();
		}
		evt.preventDefault();
	}
	
	handleChange(evt) {
		const target = evt.target;

		this.setState({
			[target.name]: target.value
		});
		evt.preventDefault();
	}
	
	render() {
		return (
			<form onSubmit={(evt) => this.handleSubmit(evt)}>
				<Modal isOpen={this.state.isModalOpen} onRequestClose={this.closeModal} className="modal-dialog">
					<div className="modal-content">
						<h3 className="modal-title">No empty field are allowed</h3>
						<button onClick={this.closeModal} className="btn btn-info">Ok</button>
					</div>
				</Modal>
				<div className="form-group">
					<label className="float-left" htmlFor="input-author">author</label>
					<input 
						type="text"
						name="author" 
						className="form-control" 
						id="input-author" 
						placeholder="author name"
						value={this.state.author}
						onChange={evt => this.handleChange(evt)}
					/>					
				</div>
				<div className="form-group">
					<label className="float-left" htmlFor="input-comment">Comment</label>
					<textarea 
						type="text" 
						name="body"
						className="form-control" 
						id="input-comment" 
						placeholder="comment..." 
						value={this.state.body}
						onChange={evt => this.handleChange(evt)}></textarea>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

AddCommentForm.propTypes = {
	onSubmitForm: PropTypes.func
};

export default AddCommentForm;