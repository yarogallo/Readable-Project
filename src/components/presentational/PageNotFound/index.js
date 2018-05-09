import React from 'react';
import PropTypes from 'prop-types';
import logo from './icons/left-arrow.svg';

import PageHeader from '../PageHeader';

function PageNotFound({title, body}) {	
	return (
		<section className="container-fluid">
			<PageHeader title="Opps!! Page not found" linkPath="/" linkContent={<img src={logo} alt="back homepage icon"/>} classname="font-weight-light text-capitalize"/>
			<section className="row d-flex justify-content-around">
				<div className="col-12">
					<p className="text-danger text-center text-uppercase">{body}</p>
				</div>
			</section>
		</section>
	);	
}

PageNotFound.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string,
};

PageNotFound.defaultProps = {
	title: 'Opps!! Page not found',
};

export default PageNotFound;
