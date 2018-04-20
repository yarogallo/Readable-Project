import React, {Component} from 'react';
import HomePage from '../../presentational/HomePage';
import {
	sortList, 
	fetchAllCategories,
	fetchAllPosts,
	selectSort
} from '../../../actions';
import {connect} from 'react-redux';

class HomePageContainer extends Component {
	componentDidMount() {
		if(!this.props.categories.length) {
			this.props.fetchCategories();
		}
		if(!this.props.posts.length) {
			this.props.fetchPosts();
		}
	}
	
	render() {
		const {
			categories,
			posts,
			sorts,
			onSelectSort
		} = this.props;
		return(
			<HomePage 
				posts={posts} 
				categories={categories}
				sorts={sorts} 
				onSelectSort={onSelectSort}/>
		);
	}
}

function mapStateToProps(state) {
	return {
		categories: state.categories.map( category => category.name),
		posts: state.posts.idsArr.map(id => !state.posts.byId[id].deleted),
		sorts: Object.keys(sortList)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchCategories: () => dispatch(fetchAllCategories()),
		fetchPosts: () => dispatch(fetchAllPosts()),
		onSelectSort: sort => dispatch(selectSort(sort))
	};
}



export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);