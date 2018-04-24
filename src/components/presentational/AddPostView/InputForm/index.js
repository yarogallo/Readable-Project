import React from 'react';
import PropTypes from 'prop-types';

function InputForm({name, label, value, onChange}) {	
	return(
		<div className="form-group">
			<label htmlFor="input-value">{label}</label>
			<input
				name={name}
				type="text"
				className="form-control"
				rows="3"
				placeholder="some text"
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
	onChange: PropTypes.func
};

InputForm.defaultProps = {
	name: '',
	label: '',
	value: '',
	onChange: () => {}
};

export default InputForm;
