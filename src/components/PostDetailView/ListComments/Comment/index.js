import React, {Component} from 'react';
import PropTypes from 'prop-types';
import remove from './icons/remove.svg';
import edit from './icons/edit.svg';

import ScoreMenu from '../../../ScoreMenu';

function editForm(value, editComment, onChangeValue) {
	return (
		<form id="edit-comment-form">
			<button className="btn btn-link float-right text-info" type="submit">save</button>
			<textarea disabled={editComment} 
				className="form-control" 
				value={value}
				onChange={evt => {
					onChangeValue(evt.target.value);
				}}></textarea>
			
		</form>
	);
}

function commentForm(body, author) {
	return (
		<div>
			<i>{`By: ${author}`}</i>
			<p className="text-muted">{body}</p>
		</div>
	);
}

class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editComment: true,
			commentBody: this.props.comment.body	
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
	
	onChangeValue(value) {
		this.setState({
			commentBody: value,
		});
	}
	
	render() {
		const {
			comment,
			onVoteComment,
			onEditComment,
			onDeleteComment,		
		} = this.props;
		
		const {
			editComment,
			commentBody,
		} = this.state;
		
		return (
			<li className="list-group-item d-flex flex-column flex-sm-row justify-content-between row">
				<div className="text-left col-12 col-sm-10">							
					{editComment? 
						commentForm(comment.body, comment.author): 
						editForm(commentBody, editComment, this.onChangeValue)}
					<ScoreMenu scoreValue={comment.voteScore}/>							
				</div>
				<div className="btn-group d-flex flex-row-reverse flex-sm-column" role="group">
					<a className="btn" href="#edit-comment-form" onClick={() => {
						this.toggleEditHandler();}}>
						<img src={edit} alt="edit comment icon"/>
					</a>
					
					<a className="btn" href="#" onClick={() => {	
						window.confirm('Shure you want delete this comment???');}}>
						<img src={remove} alt="delete comment icon"/>
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

export default Comment;
