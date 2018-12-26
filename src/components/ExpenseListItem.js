import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
	<div>
		<p>Type of bill: {description}</p>
		<p>Amount due/paid: {amount}</p>
		<p>Date created: {createdAt}</p>
		<button onClick={() => dispatch(removeExpense({ id }))}>Remove</button>
	</div>
);

export default connect()(ExpenseListItem);
