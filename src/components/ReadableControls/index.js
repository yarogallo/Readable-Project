import React from 'react';
import PropTypes from 'prop-types';
import DropDown from './DropDown';

function ReadableControls(props) {
	const {
		className,
		onAddPost,
	} = props;
	
	const customClass = `readable-controls row ${className}`;
	
	return (
		<section className={customClass}>
			<div className="col-6">
				<DropDown buttonValue="filter" categories={[1, 2, 3]}/>
				<DropDown buttonValue="sort" categories={[1, 2, 3]}/>
			</div>
			<div className="col-6">
				<button type="button" className="btn add-button float-right">Add Post</button>
			</div>
		</section>
	);
}

ReadableControls.protoTypes = {
	//custom css class
	className: PropTypes.string,
	//call when add a new post
	onAddPost: PropTypes.func
}

export default ReadableControls;
