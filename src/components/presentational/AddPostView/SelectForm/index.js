import React from 'react';
import PropTypes from 'prop-types';

function SelectForm({name, label, value, options, onChange}) {
	return (
		<div className="form-group">
			<label htmlFor="select-category">{label}</label>
			<select
				name={name}
				value={value}
				className="form-control"
				id="select-category"
				onChange={ evt => {
					onChange(evt);
				}}>
				{ options.map( cat => (
					<option 
					key={cat}
					value={cat}>{cat}</option>
				))}
			</select>
		</div>	
	);
}

SelectForm.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	options: PropTypes.array,
	onChange: PropTypes.func
};

SelectForm.defaultProps = {
	name: '',
	label: '',
	value: '',
	options: [],
	onChange: () => {}
}

export default SelectForm;
