import React, {Component} from 'react';
import HomePage from '../../presentational/HomePage';
import {
	postActions,
	categoryActions,
	constants,
} from '../../../actions';
import {connect} from 'react-redux';
import applySort from '../../../helper/applySort';

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

function mapStateToProps({posts, categories}, {match}) {
	const currentSort = match.params.sort;
	const currentPosts = posts.idsArr.reduce( (acc, id) =>	 {
		!posts.byId[id].deleted && acc.push(posts.byId[id]);
		return acc;	
	}, []);
	return {
		categories: [...categories.categoriesNames],
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
