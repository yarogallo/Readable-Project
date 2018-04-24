import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

Modal.setAppElement('#root');

function DeletePostModal(props){
	const customStyle = {
		content: {
			top: '50%',
    		left: '50%',
    		right: 'auto',
   			bottom: 'auto',
    		marginRight: '-50%',
    		transform: 'translate(-50%, -50%)'
		}
	};
	return(
		<Modal 
			isOpen={props.isOpen}
			onRequestClose={props.closeModal}
			style={customStyle}
		>
			<p>{props.text}</p>
			<div>
				<button type="button" className="btn text-info" onClick={() => {
					props.closeModal();
				}}>Cancel</button>
				<Link className="btn text-info" to={props.path} onClick={() => {
					props.closeModal();
					props.onDelete();
				}}>Delete</Link>
			</div>
			
		</Modal>
	);
}

export default DeletePostModal;
