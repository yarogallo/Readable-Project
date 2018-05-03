import React, {Component} from 'react';
import PropTypes from 'prop-types';

import removeIcon from './icons/remove.svg';
import editIcon from './icons/edit.svg';

import ScoreMenu from '../../../ScoreMenu';

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
		this.setState(prevState => {
			return {
				onEditMode: false
			};
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
				<button className="btn btn-link float-right text-info" type="submit">save</button>				
			</form>
		);
	}
	
	commentForm() {
		return (
			<div>
				<i>{`By: ${this.props.comment.author}`}</i>
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
			<div className="list-group-item d-flex flex-column flex-sm-row justify-content-between row">
				<div className="text-left col-12 col-sm-10">							
					{this.state.onEditMode
						? this.editForm()
						: this.commentForm()
					}
					<ScoreMenu scoreValue={comment.voteScore} onVote={this.handleVoteComment}/>							
				</div>
				<div className="btn-group d-flex flex-row-reverse flex-sm-column" role="group">
					<button className="btn" onClick={() => {
							this.toggleEditHandler();
						}}>
						<img src={editIcon} alt="edit comment icon"/>
					</button>					
					<button className="btn" onClick={() => {	
							const confirmDelete = window.confirm('Shure you want delete this comment???');
							confirmDelete && onDeleteComment(comment.id);
						}}>
						<img src={removeIcon} alt="delete comment icon"/>
					</button>
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
