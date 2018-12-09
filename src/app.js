import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './Styles/styles.scss';

const ExpenseDashboardPage = () => {
	return <div>This is my Expense Dash Board Page</div>;
};
const AddExpensePage = () => {
	return <div>This is my Add Expense Page</div>;
};
const EditExpensePage = () => {
	return <div>This is my Edit Expense Page</div>;
};
const HelpPage = () => {
	return <div>This is my Help Page</div>;
};
const NotFoundPage = () => {
	return (
		<div>
			Error! 404 Page not found!
			<Link to="/">Go home</Link>
		</div>
	);
};
const Header = () => {
	return (
		<header>
			<h1>Expensify</h1>
			<NavLink activeClassName="is-active" to="/" exact={true}>
				Go home
			</NavLink>
			<br />
			<NavLink activeClassName="is-active" to="/create" exact={true}>
				Add
			</NavLink>
			<br />
			<NavLink activeClassName="is-active" to="/edit" exact={true}>
				Edit
			</NavLink>
			<br />
			<NavLink activeClassName="is-active" to="/help" exact={true}>
				Get help
			</NavLink>
			<br />
		</header>
	);
};

const routes = (
	<BrowserRouter>
		<div>
			<Header />

			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true} />

				<Route path="/create" component={AddExpensePage} exact={true} />

				<Route path="/edit" component={EditExpensePage} exact={true} />

				<Route path="/help" component={HelpPage} exact={true} />

				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
