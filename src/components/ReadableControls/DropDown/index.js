import React from 'react';
import PropTypes from 'prop-types';

function DropDown(props) {
	const { buttonValue,
			categories,
			onSelectCategoria,
			className='',
	} = props;
	
	const customClass = `readable-dropdown btn-group ${className}`;
	return (
		<div className={customClass}>
  			<button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    			{buttonValue}
  			</button>
  			<div className="dropdown-menu">
    			{categories.map( category => (
					<a className="dropdown-item" href="#" key={category}>{category}</a>
				))}
  			</div>
		</div>
	);
}

DropDown.propTypes = {
	//css classes for custom style
	className: PropTypes.string,
	//value to display in dropdown
	buttonValue: PropTypes.string.isRequired,
	//all post categories 
	categories: PropTypes.array.isRequired,
	//func to call when a category is selected
	onSelectCategoria: PropTypes.func,
}; 

export default DropDown;
