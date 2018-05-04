import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ScoreMenu from '../../../ScoreMenu';
import DeleteButton from '../../../DeleteButton';

class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			onEditMode: false,
			value: this.props.comment.body,	
		};
		
		this.textInput = React.createRef();
		this.onChangeValue = this.onChangeValue.bind(this);
		this.handleVoteComment = this.handleVoteComment.bind(this);
		this.toggleEditHandler = this.toggleEditHandler.bind(this);
	}
	
	toggleEditHandler() {
		this.setState(prevState => {
			return {
				onEditMode: !prevState.onEditMode
			};
		});
	}
	
	componentDidUpdate() {
		this.state.onEditMode && this.textInput.current.focus();
	}
	
	closeEditHandler() {
		this.setState({
			onEditMode: false
		});
	}
	
	onChangeValue(value) {
		this.setState({
			value,
		});
	}
	
	editForm() {
		return (
			<form id="edit-comment-form" onSubmit={(evt) => {
				this.props.onSaveComment(
					this.props.comment.id, 
					this.state.value
				);
				evt.preventDefault();
				this.closeEditHandler();
			}}>
				<textarea
					ref={this.textInput}
					className="form-control" 
					value={this.state.value}
					onChange={evt => {
						this.onChangeValue(evt.target.value);
				}}></textarea>
				<button className="btn btn-link" type="submit">save</button>				
			</form>
		);
	}
	
	commentForm() {
		return (
			<div>
				<b className="text-capitalize">{`${this.props.comment.author}`}</b>
				<p className="text-muted">{this.props.comment.body}</p>
			</div>
		);
	}
	
	handleVoteComment(voteText) {
		this.props.onChangeScore(
			this.props.comment.id,
			voteText
		);
	}
	
	render() {
		const {
			comment,
			onDeleteComment,		
		} = this.props;
		
		return (
			<div className="list-group-item d-flex flex-column">
				<div className="text-left">							
					{this.state.onEditMode
						? this.editForm()
						: this.commentForm()
					}						
				</div>
				<div>
					<ScoreMenu scoreValue={comment.voteScore} onVote={this.handleVoteComment}/>
					<button className="btn btn-link" onClick={() => this.toggleEditHandler()}>edit</button>
					<DeleteButton text="Want to delete this comment?" onDelete={() => onDeleteComment(comment.id)}/>					
				</div>
			</div>
		);
	}
}

Comment.propTypes = {
	//comment
	comment: PropTypes.object.isRequired,
	//vote for a comment
	onVoteComment: PropTypes.func,
	//action delete a specific comment,
	onSaveComment: PropTypes.func,
	//action edit a comment
	onDeleteComment: PropTypes.func,
	//change score
	onChangeScore: PropTypes.func	
};

Comment.defaultProps = {
	comment: {},
};

export default Comment;
