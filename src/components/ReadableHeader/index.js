import React from 'react';
import PropTypes from 'prop-types';

function ReadableHeader({ title, className = '' }) {
	const customClases = `row readable-header text-center ${className}`;
	return (
		<header className={customClases}>
			<h1 className="col-12">{title}</h1>
		</header>
	);
}

ReadableHeader.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string	
};

export default ReadableHeader;
