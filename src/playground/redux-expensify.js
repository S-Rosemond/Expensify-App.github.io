import { createStore, combineReducers } from 'redux';
import uuidv4 from 'uuid';

//ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuidv4(),
		description,
		note,
		amount,
		createdAt
	}
});

//REMOVE_EXPENSE //Course version = ({id}={})
//I did prop.expense because we have to pass in a value
const removeExpense = ({ id } = prop.expense) => ({
	type: 'REMOVE_EXPENSE',
	expense: {
		id
	}
});

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
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			console.log(action);
			console.log(state);
			return state.filter(element => element.id !== action.expense.id);
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

store.subscribe(() => {
	console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

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
