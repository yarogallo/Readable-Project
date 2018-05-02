import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DeletePostModal from './DeletePostModal';

class DeletePost extends Component {
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
				<button className="btn text-primary" onClick={() => this.openModal()}>delete</button>
				<DeletePostModal
					text="Shure you want delete this post?"
					isOpen={this.state.isOpenModal}
					closeModal={this.closeModal}
					path={this.props.path}
					onDelete={this.props.onDeletePost}
				/>
			</div>
		);
	}
}

DeletePost.propTypes = {
	path: PropTypes.string,
	onDeletePost: PropTypes.func,
};

DeletePost.defaultProps = {
	path: '',
	onDeletePost: () => {}
};


export default DeletePost;