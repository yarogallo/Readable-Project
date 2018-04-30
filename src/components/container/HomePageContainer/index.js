import React, {Component} from 'react';
import HomePage from '../../presentational/HomePage';
import {
	sortList, 
	fetchAllCategories,
	fetchAllPosts,
	selectSort,
	votePostScore
} from '../../../actions';
import {connect} from 'react-redux';

class HomePageContainer extends Component {
	componentDidMount() {
		if(!this.props.categories.length) {
			this.props.fetchCategories();
		}
		this.props.fetchPosts();
	}
	
	render() {
		const {
			categories,
			posts,
			sorts,
			onSelectSort,
			onVotePost,
		} = this.props;
		return(
			<HomePage 
				posts={posts} 
				categories={categories}
				sorts={sorts} 
				onSelectSort={onSelectSort}
				onVotePost={onVotePost}/>
		);
	}
}

function applySort(arr, sort) {
	switch (sort) {
		case sortList.newest:
			return arr.sort((a, b) => a.timestamp - b.timestamp).reverse();
		case sortList.oldest:
			return arr.sort((a, b) => a.timestamp - b.timestamp);
		case sortList.max_score:
			return arr.sort((a, b) => a.voteScore - b.voteScore).reverse();
		case sortList.min_score:
			return arr.sort((a, b) => a.voteScore - b.voteScore);		
		default:
			return arr;
	}
}

function mapStateToProps(state, {match}) {
	const currentPosts = state.posts.idsArr.reduce( (acc, id) =>	 {
		id && acc.push(state.posts.byId[id]);
		return acc;	
	}, []);
	return {
		categories: [...state.categories.categoriesNames],
		posts: applySort(currentPosts, state.currentSort),
		sorts: Object.keys(sortList)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchCategories: () => dispatch(fetchAllCategories()),
		fetchPosts: () => dispatch(fetchAllPosts()),
		onSelectSort: sort => dispatch(selectSort(sort)),
		onVotePost: (id, voteText) => dispatch(votePostScore(id, voteText)),
	};
}



export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
