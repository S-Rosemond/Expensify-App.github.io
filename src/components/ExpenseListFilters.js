import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from './../actions/filters';

const ExpenseListFilters = props => (
	<div>
		<input type="text" value={props.filters.text} onChange={el => props.dispatch(setTextFilter(el.target.value))} />
		<select
			value={props.filters.sortBy}
			onChange={el =>
				el.target.value === 'date'
					? props.dispatch(sortByDate())
					: el.target.value === 'amount' ? props.dispatch(sortByAmount()) : null}
		>
			<option value="date">Date</option>
			<option value="amount">Amount</option>
		</select>
	</div>
);

const mapState = state => ({
	filters: state.filters
});

export default connect(mapState)(ExpenseListFilters);
