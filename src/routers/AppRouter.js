import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Expense from '../components/ExpenseDashboard';
import AddExpense from '../components/ExpensePage';
import EditExpense from '../components/EditPage';
import Help from '../components/HelpPage';
import NotFoundPage from '../components/PageNotFound';
import Header from '../components/Header';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />

			<Switch>
				<Route path="/" component={Expense} exact={true} />

				<Route path="/create" component={AddExpense} exact={true} />

				<Route path="/edit" component={EditExpense} exact={true} />

				<Route path="/help" component={Help} exact={true} />

				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
