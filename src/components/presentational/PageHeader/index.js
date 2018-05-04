import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function PageHeader(props) {
	const {
		title,
		linkPath,
		linkContent,
		classname
	} = props;
	return (
		<header className={`row flex-column flex-sm-row d-flex align-items-baseline text-white bg-dark ${classname}`}>
			<nav className="col-12 col-sm-2 col-lg-1 navbar">
				<Link to={linkPath} className="navbar-brand text-uppercase text-white bg-success">{linkContent}</Link>
			</nav>
			<h1 className="col-12 col-sm text-center">{title}</h1>
		</header>
	);
}

PageHeader.propTypes = {
	title: PropTypes.string.isRequired,
	linkPath: PropTypes.string,
	linkContent: PropTypes.node,	
};

PageHeader.defaultProps = {
	title: '',
	linkPath: '',
	linkContent: '',	
};

export default PageHeader;