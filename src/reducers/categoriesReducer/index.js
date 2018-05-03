import {constants} from '../../actions';

const initialCategories = {
	allCategories: {},
	categoriesNames: []
};

export default function categoriesReducer(state=initialCategories, action) {
	switch (action.type) {
		case constants.ALL_CATEGORIES_SUCCESS:
			return {
				...state,
				allCategories: action.categories.reduce((acc, category) => {
					acc[category.name] = category;
					return acc;
				}, {}),
				categoriesNames: action.categories.map(category => category.name)
			};
		default:
			return state;
	}
};