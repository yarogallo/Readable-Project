import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DropDown from './DropDown';
import { allSortCriteria, sortPosts, filterPosts } from '../../actions';

function AppMenu(props) {
	const {
		className,
		sortCriteries,
		onSelectSort,
		categories = ["1","2", "3", "4"],
		onSelectCategory
	} = props;
	
	const customClass = `readable-controls col-6 ${className}`;
	
	return (
		<section className={customClass}>
			<div>
				<DropDown buttonValue="filter" dropList={categories} onSelectListItem={onSelectCategory}/>
				<DropDown buttonValue="sort" dropList={sortCriteries} onSelectListItem={onSelectSort}/>
			</div>
		</section>
	);
}

AppMenu.protoTypes = {
	//custom css class
	className: PropTypes.string,
	//all post categories
	categories: PropTypes.array,
	//for sorting the list
	sortCriteries: PropTypes.array,
	//call for sort the posts
	onSelectSort: PropTypes.func,
	//filter posts by category
	onSelectCategory: PropTypes.func
}

function mapDispatchToProps(dispatch) {
	return {
		onSelectSort: ( sortBy ) => {
			dispatch(sortPosts( sortBy ));
		},
		onSelectCategory: ( category ) => {
			dispatch(filterPosts( category ))
		}
	};
}

function mapStateToProps(store) {
	return {
		sortCriteries: Object.keys(allSortCriteria)
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(AppMenu);
