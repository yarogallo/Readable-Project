import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DeleteModal from './DeleteModal';

class DeleteButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpenModal: false
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	openModal() {
		this.setState({
			isOpenModal: true
		});
	}
	closeModal() {
		this.setState({
			isOpenModal: false
		});
	}
	render() {
		return (
			<div className="d-inline">
				<button className="btn btn-link" onClick={() => this.openModal()}>delete</button>
				<DeleteModal
					text={this.props.text}
					isOpen={this.state.isOpenModal}
					closeModal={this.closeModal}
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