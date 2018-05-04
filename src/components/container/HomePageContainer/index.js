import React, {Component} from 'react';
import HomePage from '../../presentational/HomePage';
import {
	postActions,
	categoryActions,
	constants,
} from '../../../actions';
import {connect} from 'react-redux';

class HomePageContainer extends Component {
	componentDidMount() {
		console.log('mount');
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
			sort,
			onVotePost,
			onDeletePost
		} = this.props;
		return(
			<HomePage 
				posts={posts} 
				categories={categories}
				sorts={sorts}
				sort={sort} 
				onVotePost={onVotePost}
				onDeletePost={onDeletePost}/>
		);
	}
}

function applySort(arr, sort) {
	const {sortList} = constants;
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
	const currentSort = match.params.sort;
	const currentPosts = state.posts.idsArr.reduce( (acc, id) =>	 {
		!state.posts.byId[id].deleted && acc.push(state.posts.byId[id]);
		return acc;	
	}, []);
	return {
		categories: [...state.categories.categoriesNames],
		posts: applySort(currentPosts, currentSort),
		sorts: Object.keys(constants.sortList),
		sort: currentSort,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchCategories: () => dispatch(categoryActions.fetchAllCategories()),
		fetchPosts: () => dispatch(postActions.fetchAllPosts()),
		onVotePost: (id, voteText) => dispatch(postActions.votePostScore(id, voteText)),
		onDeletePost: id => dispatch(postActions.deleteThisPost(id)),
	};
}



export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
