import React from 'react';
import { NavLink } from 'react-router-dom';

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

export default Header;
