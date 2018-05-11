import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';	

Modal.setAppElement('#root');

function DeleteModal({text, path, closeModal, onDelete, isOpen}){
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
		closeModal();
		onDelete();
	};
	
	return(
		<Modal 
			isOpen={isOpen}
			onRequestClose={closeModal}
			style={customStyle}
		>
			<p>{text}</p>
			<div>
				<button type="button" className="btn text-info" onClick={() => {
					closeModal();
				}}>Cancel</button>
				{path 
					? <Link className="btn text-info" to={path} onClick={handleDeleteClick}>Delete</Link>
					: <button className="btn text-info" onClick={handleDeleteClick}>Delete</button>}
			</div>			
		</Modal>
	);
}

DeleteModal.propTypes = {
	text: PropTypes.string,
	path: PropTypes.string,
	closeModal: PropTypes.func,
	onDelete: PropTypes.func,	
	isOpen: PropTypes.bool,	
};

DeleteModal.defaultProps = {
	text: "Sure you want delete",
}

export default DeleteModal;
