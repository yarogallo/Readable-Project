import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {addComment} from '../../../actions';
import Comment from './Comment';

function validateForm(author, body) {
	return author !== '' && body !== '';
}

function normalizeText(str) {
	return str.charAt(0).toUpperCase().concat(str.slice(1));
}

class ListComments extends Component {
	constructor() {
		super();
		this.state = {
			author: '',
			body: ''
		};
	}
	
	setAuthor(value) {
		this.setState({
			author: value
		});
	}
	
	setBody(value) {
		this.setState({
			body: value	
		});
	}
	resetValues() {
		this.setState({
			author: '',
			body: ''
		});	
	}
	
	render() {
		const {
			comments,
			parentId,
			onAddComment
		} = this.props;
		const {
			author, 
			body
		} = this.state;		
		return (
			<div className="col-12 col-md-8 text-right">
				<div>
					<ul className="list-group">
						{comments.map( comment => (
							<Comment key={comment.id} comment={comment}/>
						))}
					</ul>
				</div>
				<div>
					<a className="btn btn-link text-info text-uppercase" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
						add comment
					</a>
					<div className="collapse" id="collapseExample">
						<form onSubmit={ evt => {
							evt.preventDefault();
							if(validateForm(author, body)) {
								onAddComment(parentId,normalizeText(author), body);
								this.resetValues();
							} else {
								window.alert('All fields ere required to be fill');
							}
						}}>
							<div className="form-group">
								<label className="float-left" htmlFor="input-author">author</label>
								<input 
									type="text" 
									className="form-control" 
									id="input-author" 
									placeholder="author name"
									value={author}
									onChange={evt => {
										this.setAuthor(evt.target.value)
									}}
								/>					
							</div>
							<div className="form-group">
								<label className="float-left" htmlFor="input-comment">Comment</label>
								<textarea 
									type="text" 
									className="form-control" 
									id="input-comment" 
									placeholder="comment..." 
									value={this.state.body}
									onChange={evt => {
										this.setBody(evt.target.value);
									}}></textarea>
							</div>
							<button type="submit" className="btn btn-primary">Submit</button>
						</form>
					</div>
				</div>
			</div>
		);
	}	
}

ListComments.propTypes = {
	//all comments from specific post
	comments: PropTypes.array,
	//Id of the comments parent
	parentId: PropTypes.string.isRequired,
	onAddComment: PropTypes.func,
};

ListComments.defaultProps = {
	comments: [],
	parentId: '',
	onAddComment: () => {}
};

function mapStateToProps(state) {
	const { activePost } = state;
	return {
		parentId: activePost.postId,
		comments: activePost.comments
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onAddComment: (parentId, author, body) => dispatch(addComment(parentId, author, body))
	};
}
export default connect(mapStateToProps,mapDispatchToProps)(ListComments);
