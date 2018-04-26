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

function mapStateToProps(state) {
	return {
		categories: [...state.categories.categoriesNames],
		posts: state.posts.idsArr.reduce( (acc, id) =>	 {
			id && acc.push(state.posts.byId[id]);
			return acc;	
		}, []),
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
