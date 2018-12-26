import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from './../actions/filters';

const ExpenseListFilters = props => (
	<div>
		<input type="text" value={props.filters.text} onChange={el => el.dispatch(setTextFilter(el.target.value))} />
	</div>
);

const mapState = state => ({
	filters: state.filters
});

export default connect(mapState)(ExpenseListFilters);
