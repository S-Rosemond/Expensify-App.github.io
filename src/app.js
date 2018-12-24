import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './Styles/styles.scss';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

const store = configureStore();

//addExpense -> water bill
store.dispatch(addExpense({ description: 'Water bill' }));

//addExpense -> gas bill
store.dispatch(addExpense({ description: 'Gas bill' }));

//setTextFilter -> bill
store.dispatch(setTextFilter('bill'));

//getVisibleExpenses -> print visible one to screen
const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(VisibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
