import React from 'react';
import PropTypes from 'prop-types';

function TextareaForm({name, label, value, onChange, placeholder}) {	
	return(
		<div className="form-group">
			<label htmlFor="content-post">{label}</label>
			<textarea 
				type="text"
				name={name}
				className="form-control"
				rows="3"
				placeholder={placeholder}
				id="content-post" 
				value={value}
				onChange={evt => {
					onChange(evt);
				}}></textarea>
		</div>
	);
}

TextareaForm.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func
};

TextareaForm.defaultProps = {
	name: '',
	label: '',
	value: '',
	onChange: () => {}
};

export default TextareaForm;
