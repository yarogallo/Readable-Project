import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import backIcon from './icons/left-arrow.svg';
import TextareaForm from './TextareaForm';
import InputForm from './InputForm';
import SelectForm from './SelectForm';

class AddPostView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.postToEdit ? this.props.postToEdit.title : "",
			author: this.props.postToEdit ? this.props.postToEdit.author : "",
			body: this.props.postToEdit ? this.props.postToEdit.body : "",
			category: this.props.postToEdit ? this.props.postToEdit.category : this.props.categories[0],
			mode: this.props.postToEdit ? 'edit' : 'add',
		};	
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleResetForm = this.handleResetForm.bind(this);
		this.handleSubmitForm = this.handleSubmitForm.bind(this);
	}
	
	componentWillReceiveProps(nextProps) {
		if(!this.state.category) {
			this.setState({
				category: nextProps.categories[0]
			});
		}
	}
	
	handleInputChange(evt) {
		const value = evt.target.value;
		const name = evt.target.name;
		
		this.setState({
			[name]: value
		});
	}
	
	handleResetForm() {
		this.setState({
			title: '',
			author: '',
			body: '',
			category: this.props.categories[0]
		});
	}
	
	handleSubmitForm(evt) {
		evt.preventDefault();
		const { 
			title,
			author,
			body,
			category
		} = this.state;
		
		if(this.state.mode === 'add') {
			this.props.onSubmit(title, body, author, category);
		} else {
			this.props.onSubmit(title, body);
		}
	}
	
	completeForm() {
		const {
			categories
		} = this.props;
		
		const { 
			title,
			author,
			body,
			category
		} = this.state;
		
		const label = this.state.mode === 'add' ? 'submit' : 'save';
		return (
			<form className="col-12 col-md-10 col-lg-8" onSubmit={ evt => this.handleSubmitForm(evt)}>
				<InputForm name="title" label="title" value={title} onChange={this.handleInputChange}/>
				<TextareaForm name="body" label="content" value={body} onChange={this.handleInputChange}/>
				{ this.state.mode === 'edit' 
					? null 
					: <div>
							<SelectForm name="category" label="categories" value={category} options={categories} onChange={this.handleInputChange}/>
							<InputForm name="author" label="author" value={author} onChange={this.handleInputChange}/>
						</div>
				}
				<button type="submit" datatype="edit" className="btn bg-success">{label}</button>
			</form>
		);
	}
	
	render() {
		return (
			<section className="container-fluid">
				<header className="row flex-column flex-sm-row d-flex align-items-baseline bg-success">
					<nav className="col-12 col-sm-2 col-lg-1 navbar">
						<Link to="/" className="navbar-brand bg-light"><img src={backIcon} alt="back homepage icon"/></Link>
					</nav>	
					<h2 className="col-12 col-sm text-sm-center text-uppercase">Add/Edit Post</h2>			
				</header>				
				<section className="row d-flex justify-content-around bg-light text-capitalize">														
					{this.completeForm()}					
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
	onSubmit: PropTypes.func,
}

AddPostView.defaultProps = {
	categories: [],
	onSubmit: () => {},
}

export default AddPostView;


