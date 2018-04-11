import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import Comment from './Comment';

const customStyles = {
	content : {
	  top : '50%',
	  left: '50%',
	  right: 'auto',
	  bottom : 'auto',
	  marginRight: '-50%',
	  transform : 'translate(-50%, -50%)'
	}
};

Modal.setAppElement('#root');

class ListComments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalIsOpen: false,
		};
		
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	
	openModal() {
		this.setState({
			modalIsOpen: true
		});
	}
	
	closeModal() {
		this.setState({
			modalIsOpen: false
		});
	}
	
	render() {
		const {comments=[1, 5, 6, 8, 6]} = this.props;
		return(
			<div className="col-12 col-md-8 text-right">
				<button type="button" className="btn btn-primary" onClick={() => {
					this.openModal();
				}}>Add Comment</button>
				
				<Modal
					isOpen={this.state.modalIsOpen}
					style={customStyles}
					contentLabel="add comments"
				>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => {
						this.closeModal();
					}}>
          				<span aria-hidden="true">&times;</span>
       				</button>
					<form>
  						<div className="form-group">
   						 	<label htmlFor="input-author">name</label>
    						<input type="text" className="form-control" id="input-author" placeholder="author name"/>					
  						</div>
  						<div className="form-group">
    						<label htmlFor="input-comment">Comment</label>
    						<textarea type="text" className="form-control" id="input-comment" placeholder="comment..."></textarea>
  						</div>
  						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</Modal>
				<ul className="list-group">
					<Comment/>
					<Comment/>
					<Comment/>
					<Comment/>
				</ul>
			</div>
		);
	}
}

ListComments.propTypes = {
	//all comments from specific post
	comments: PropTypes.array
}

export default ListComments;
