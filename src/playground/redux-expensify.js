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

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	expense: {
		id
	}
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});
//SET_EXPENSE

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

//SORT_BY_DATE
const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});
//SET_START_DATE
const setStartDate = value => ({
	type: 'SET_START_DATE',
	value
});
//SET_END_DATE
const setEndDate = value => ({
	type: 'SET_END_DATE',
	value
});
//EXPENSES REDUCER

const expensesReducerDefault = [];

const expensesReducer = (state = expensesReducerDefault, action) => {
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

//Fitler reducer
const filtersReducerDefault = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersReducerDefault, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return { ...state, text: action.text };
		case 'SORT_BY_DATE':
			return { ...state, sortBy: 'date' };
		case 'SORT_BY_AMOUNT':
			return { ...state, sortBy: 'amount' };
		case 'SET_START_DATE':
			return { ...state, startDate: action.value };
		case 'SET_END_DATE':
			return { ...state, endDate: action.value };
		default:
			return state;
	}
};

//timestamps (milliseconds)
// January 1st 1970 (unix epoch)
// 33400, 10, -203

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses.filter(expense => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	});
};

// Store creation
const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(0));
store.dispatch(setEndDate(1250));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

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

// const user = {
// 	name: 'Jen',
// 	age: 24
// };

// let objClone = { ...user };
// console.log('clone:', objClone);
// objClone.name = 'Sam';
// console.log('clone:', objClone);
// console.log('user:', user);
// let secondObjClone = { ...objClone, ...user };
// console.log('second clone:', secondObjClone);
