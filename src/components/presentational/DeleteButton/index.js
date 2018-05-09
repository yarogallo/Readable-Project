import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DeleteModal from './DeleteModal';

class DeleteButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpenModal: false
		};
		this.toggleModal = this.toggleModal.bind(this);
	}
	toggleModal() {
		this.setState({
			isOpenModal: !this.state.isOpenModal
		});
	}
	
	render() {
		return (
			<div className="d-inline">
				<button className="btn btn-link" onClick={() => this.toggleModal()}>delete</button>
				<DeleteModal
					text={this.props.text}
					isOpen={this.state.isOpenModal}
					closeModal={this.toggleModal}
					path={this.props.path}
					onDelete={this.props.onDelete}
				/>
			</div>
		);
	}
}

DeleteButton.propTypes = {
	path: PropTypes.string,
	onDelete: PropTypes.func,
	text: PropTypes.string,
};

DeleteButton.defaultProps = {
	path: '',
	text: '',
	onDelete: () => {}
};

export default DeleteButton;