import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
	deleteComment,
	editComment,
} from '../../../../actions';
import removeIcon from './icons/remove.svg';
import editIcon from './icons/edit.svg';

import ScoreMenu from '../../../ScoreMenu';

class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editComment: false,
			value: this.props.comment.body	
		};
		this.onChangeValue= this.onChangeValue.bind(this);
	}
	
	toggleEditHandler() {
		this.setState(prevState => {
			return {
				editComment: !prevState.editComment
			};
		});
	}
	
	closeEditHandler() {
		this.setState(prevState => {
			return {
				editComment: false
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
			<form id="edit-comment-form" onSubmit={evt => {
				evt.preventDefault();
				this.state.value !== this.props.comment.body && this.props.onEditComment(this.props.comment.id, this.state.value);
				this.closeEditHandler();
			}}>
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
			onEditComment,
			onDeleteComment,		
		} = this.props;
		
		return (
			<li className="list-group-item d-flex flex-column flex-sm-row justify-content-between row">
				<div className="text-left col-12 col-sm-10">							
					{!this.state.editComment? 
						this.commentForm(): 
						this.editForm()}
					<ScoreMenu scoreValue={comment.voteScore}/>							
				</div>
				<div className="btn-group d-flex flex-row-reverse flex-sm-column" role="group">
					<a className="btn" href="#edit-comment-form" onClick={() => {
						this.toggleEditHandler();}}>
						<img src={editIcon} alt="edit comment icon"/>
					</a>
					
					<a className="btn" href="#" onClick={() => {	
							const confirmDelete = window.confirm('Shure you want delete this comment???');
							confirmDelete && onDeleteComment(comment.id);
						}}>
						<img src={removeIcon} alt="delete comment icon"/>
					</a>
				</div>
			</li>
		);
	}
}

Comment.propTypes = {
	//comment
	comment: PropTypes.object.isRequired,
	//vote for a comment
	onVoteComment: PropTypes.func,
	//action delete a specific comment,
	onEditComment: PropTypes.func,
	//action edit a comment
	onDeleteComment: PropTypes.func,	
};

Comment.defaultProps = {
	comment: {},
	onVoteComment: () => {},
	onEditComment: () => {},
	onDeleteComment: () => {},
};

function dispatchStateToProps(dispatch) {
	return {
		onEditComment: (id, body) => dispatch(editComment(id, body)),
		onDeleteComment: commentId => dispatch(deleteComment(commentId))	
	};
}

export default connect(null, dispatchStateToProps)(Comment);
