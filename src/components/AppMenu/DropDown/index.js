import React from 'react';
import PropTypes from 'prop-types';

function DropDown(props) {
	console.log(props);
	const { buttonValue,
			dropList,
			onSelectListItem,
			className='',
	} = props;
	
	const customClass = `dropdown-menu ${className}`;
	
	return (
		<div className={customClass}>
			<h6 className="dropdown-header">{buttonValue}</h6>
    		{dropList.map( elem => (
					<a className="dropdown-item" href="#" key={elem} onClick={() => {
						onSelectListItem(elem);
					}}>{elem}</a>
				))}
  		</div>
	);
}

DropDown.propTypes = {
	//css classes for custom style
	className: PropTypes.string,
	//value to display in dropdown
	buttonValue: PropTypes.string.isRequired,
	//all elements in dropdown list
	dropList: PropTypes.array.isRequired,
	//func to call when a category is selected
	onSelectListItem: PropTypes.func,
};

export default DropDown;
