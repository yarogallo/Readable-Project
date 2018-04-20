import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import backIcon from './icons/left-arrow.svg';

function input(id, label, placeholder, value, onChangeValue) {
	return (
		<div className="form-group">
			<label htmlFor={id}>{label}</label>
			<input 
				type="text" 
				className="form-control" 
				placeholder={placeholder}
				id={id} 
				value={value}
				onChange={ evt => {
					onChangeValue(evt.target.value);
				}}/>
		</div>
	);
}

function textarea(id, label, placeholder, value, onChangeValue) {
	return (
		<div className="form-group">
			<label htmlFor={id}>{label}</label>
			<textarea 
				type="text" 
				className="form-control"
				rows="3"
				placeholder={placeholder}
				id={id} 
				value={value}
				onChange={(evt) => {
					onChangeValue(evt.target.value);
				}}></textarea>
		</div>
	);
}

function select(id, label, postCategories, selectedCategory) {
	return (
		<div className="form-group">
			<label htmlFor={id}>{label}</label>
			<select className="form-control" id={id} defaultValue={selectedCategory}>
				{ postCategories.map( category => (
					<option key={category}>{category}</option>
				))}
			</select>
		</div>	
	);
}

class AddPostView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			titleValue: this.props.postToEdit.title || "",
			authorValue: this.props.postToEdit.author || "",
			bodyValue: this.props.postToEdit.body || ""
		}
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeAuthor = this.onChangeAuthor.bind(this);
		this.onChangeBody = this.onChangeBody.bind(this);
	}
	
	onChangeTitle( titleValue ) {
		this.setState({
			titleValue,
		});
	}
	
	onChangeAuthor(authorValue) {
		this.setState({
			authorValue,
		});
	}
	
	onChangeBody(bodyValue) {
		this.setState({
			bodyValue
		});	
	}
	
	render() {
		const {
			categories,
			postToEdit 
		} = this.props;
		
		const { 
			titleValue,
			authorValue,
			bodyValue
		} = this.state
		
		return (
			<section className="container-fluid">
				<header className="row flex-column flex-sm-row d-flex align-items-baseline bg-success">
					<nav className="col-12 col-sm-2 col-lg-1 navbar">
						<Link to="/" className="navbar-brand bg-light"><img src={backIcon} alt="back homepage icon"/></Link>
					</nav>	
					<h2 className="col-12 col-sm text-sm-center text-uppercase">Add/Edit Post</h2>			
				</header>
				
				<section className="row d-flex justify-content-around bg-light text-capitalize">			
					<form className="col-12 col-md-10 col-lg-8">			
						{ input("post-title", "title", "Ex: Learning react from cero", titleValue, this.onChangeTitle) }
						{ textarea("post-body", "content", "content....", bodyValue, this.onChangeBody) }
						{ !postToEdit.id && input("post-author", "author", "Ex: Jonh Doe", authorValue, this.onChangeAuthor)}
						{ select("post-categories", "categories", categories, postToEdit.category) }
						{postToEdit.id ? 
							(<button type="submit" datatype="edit" className="btn bg-success">Save</button>) : 
							(<button type="submit"datatype="add" className="btn bg-success">Submit</button>)
						}
					</form>
				</section>
			</section>
		);
	}
}

AddPostView.propTypes = {
	//if there is a post to edited
	postToEdit: PropTypes.object,
	//list of categories for select
	categories: PropTypes.array.isRequired,
	//edit post
	onSavePost: PropTypes.func,
	//add new post
	onAddPost: PropTypes.func,	
}

AddPostView.defaultProps = {
	postToEdit: {},
	categories: [],
	onSavePost: () => {},
	onAddPost: () => {},
}

export default AddPostView;


