import {
	getAllCategories,	
} from '../../helper/postAPI';

import {ALL_CATEGORIES_SUCCESS} from '../constants';

function allCategoriesSuccess(categories) {
	return {
		type: ALL_CATEGORIES_SUCCESS,
		categories,
	};
}

// all categories
export function fetchAllCategories() {
	return dispath => getAllCategories()
			.then(data => data.categories && dispath(allCategoriesSuccess(data.categories)));
}

