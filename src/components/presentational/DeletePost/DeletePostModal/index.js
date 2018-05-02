import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import index from '../../../container/PostDetailViewContainer';

Modal.setAppElement('#root');

function DeletePostModal(props){
	const customStyle = {
		content: {
			top: '50%',
    		left: '50%',
    		right: 'auto',
   			bottom: 'auto',
    		marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		}
	};
	
	const handleDeleteClick = function() {
		props.closeModal();
		props.onDelete();
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
				{props.path 
					? <Link className="btn text-info" to={props.path} onClick={handleDeleteClick}>Delete</Link>
					: <button className="btn text-info" onClick={handleDeleteClick}>Delete</button>}
			</div>			
		</Modal>
	);
}

DeletePostModal.propTypes = {
	text: PropTypes.string,
	path: PropTypes.string,
	closeModal: PropTypes.func,
	onDelete: PropTypes.func,	
};

DeletePostModal.defaultProps = {
	text: "Sure you want delete",
}

export default DeletePostModal;
