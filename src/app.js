import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './Styles/styles.scss';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill' }));

store.dispatch(addExpense({ description: 'Gas bill' }));

store.dispatch(setTextFilter('bill'));

setTimeout(() => {
	store.dispatch(setTextFilter('rent'));
}, 3000);

//getVisibleExpenses -> print visible one to screen
const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(VisibleExpenses);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
