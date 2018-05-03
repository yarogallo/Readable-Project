import React from 'react';
import PropTypes from 'prop-types';

function InputForm({name, label, value, onChange, placeholder}) {	
	return(
		<div className="form-group">
			<label htmlFor="input-value">{label}</label>
			<input
				name={name}
				type="text"
				className="form-control"
				rows="3"
				placeholder={placeholder}
				id="input-value" 
				value={value}
				onChange={evt => {
					onChange(evt);
				}}></input>
		</div>
	);
}

InputForm.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
};

InputForm.defaultProps = {
	name: '',
	label: '',
	value: '',
	placeholder: '',
	onChange: () => {}
};

export default InputForm;
