import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListItem from './ExpenseListItem';
import ExpenseListFilters from './ExpenseListFilters';

const Expense = () => (
	<div>
		<ExpenseListFilters />
		<ExpenseList />
	</div>
);
export default Expense;
