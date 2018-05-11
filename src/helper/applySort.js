import {constants} from '../actions';

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

export default applySort;
