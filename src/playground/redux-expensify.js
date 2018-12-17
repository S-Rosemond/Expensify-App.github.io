import { createStore, combineReducers } from 'redux';

//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//EXPENSES REDUCER

const expensesReducerDefault = [];

const expensesReducer = (state = expensesReducerDefault, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

//Fitler reducer

const filtersReducerDefault = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersReducerDefault, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// Store creation
const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

console.log(store.getState());

const demoState = {
	expenses: [
		{
			id: 'random',
			description: 'January Rent',
			note: 'final payment',
			amount: 54500,
			createdAt: 0
		}
	],
	filters: {
		text: 'rent',
		sortBy: 'amount', //date or amount
		startDate: undefined,
		endDate: undefined
	}
};
