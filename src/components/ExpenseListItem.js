import React from 'react';

//Solved on my own!!! Then formated to course-v
const ExpenseListItem = ({ description, amount, createdAt }) => (
	<div>
		<p>Type of bill: {description}</p>
		<p>Amount due/paid: {amount}</p>
		<p>Date created: {createdAt}</p>
	</div>
);

export default ExpenseListItem;
