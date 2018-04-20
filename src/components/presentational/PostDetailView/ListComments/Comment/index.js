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
			value: this.props.comment.body	
		};
		this.onChangeValue= this.onChangeValue.bind(this);
	}
	
	toggleEditHandler() {
		this.setState(prevState => {
			return {
				onEditMode: !prevState.onEditMode
			};
		});
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
			<form id="edit-comment-form">
				<button className="btn btn-link float-right text-info" type="submit">save</button>
				<textarea
					className="form-control" 
					value={this.state.value}
					onChange={evt => {
						this.onChangeValue(evt.target.value);
				}}></textarea>				
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
	
	render() {
		const {
			comment,
			onVoteComment,
			onSaveComment,
			onDeleteComment,		
		} = this.props;
		
		return (
			<div className="list-group-item d-flex flex-column flex-sm-row justify-content-between row">
				<div className="text-left col-12 col-sm-10">							
					{this.state.onEditMode
						? this.editForm()
						: this.commentForm()
					}
					<ScoreMenu scoreValue={comment.voteScore} onVote={onVoteComment}/>							
				</div>
				<div className="btn-group d-flex flex-row-reverse flex-sm-column" role="group">
					<a className="btn" href="#edit-comment-form" onClick={() => {
						this.toggleEditHandler();}}>
						<img src={editIcon} alt="edit comment icon"/>
					</a>					
					<a className="btn" href="#" onClick={() => {	
							const confirmDelete = window.confirm('Shure you want delete this comment???');
							confirmDelete && onDeleteComment();
						}}>
						<img src={removeIcon} alt="delete comment icon"/>
					</a>
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
	ononEditMode: PropTypes.func,
	//action edit a comment
	onDeleteComment: PropTypes.func,	
};

Comment.defaultProps = {
	comment: {},
	onVoteComment: () => {},
	onSaveComment: () => {},
	onDeleteComment: () => {},
};

export default Comment;
