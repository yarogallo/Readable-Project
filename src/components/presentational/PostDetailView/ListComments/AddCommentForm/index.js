import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddCommentForm extends Component {
	constructor(){
		super();
		this.state = {
			author: '',
			body: ''	
		};
	}
	
	setAuthor(value) {
		this.setState({
			author: value
		});
	}
	
	setBody(value) {
		this.setState({
			body: value	
		});
	}
	resetValues() {
		this.setState({
			author: '',
			body: ''
		});	
	}
	
	render() {
		return (
			<form onSubmit={(evt) => {
				evt.preventDefault();
				this.props.onSubmitForm(
					this.state.author,
					this.state.body
				);
				this.resetValues();
			}}>
				<div className="form-group">
					<label className="float-left" htmlFor="input-author">author</label>
					<input 
						type="text" 
						className="form-control" 
						id="input-author" 
						placeholder="author name"
						value={this.state.author}
						onChange={evt => {
							this.setAuthor(evt.target.value)
						}}
					/>					
				</div>
				<div className="form-group">
					<label className="float-left" htmlFor="input-comment">Comment</label>
					<textarea 
						type="text" 
						className="form-control" 
						id="input-comment" 
						placeholder="comment..." 
						value={this.state.body}
						onChange={evt => {
							this.setBody(evt.target.value);
						}}></textarea>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

AddCommentForm.propTypes = {
	onSubmitForm: PropTypes.func
};

AddCommentForm.defaultProps = {
	onSubmitForm: () => {}
}

export default AddCommentForm;