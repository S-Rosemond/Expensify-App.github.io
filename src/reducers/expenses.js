//EXPENSES REDUCER
const expensesReducerDefault = [];

export default (state = expensesReducerDefault, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter(element => element.id !== action.expense.id);
		case 'EDIT_EXPENSE':
			return state.map(element => {
				return element.id === action.id ? { ...element, ...action.updates } : element;
			});
		default:
			return state;
	}
};
