//Higher Order Component (HOC): A component (HOC) that renders another component
//Reuse code
//Render hijacking
//prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
);

//1. function

const withAdminWarning = WrappedComponent => {
	return props => (
		<div>
			{props.isAdmin && <p>This is private info. Please don't share!</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);

//requireAuthentication
const requireAuthentication = WrappedComponent => {
	return props => (
		<div>
			{props.isAuthenticated ? (
				<WrappedComponent {...props} />
			) : (
				<p>Authentication failed: Please try logging in again</p>
			)}
		</div>
	);
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is the details" />, document.getElementById('app'));
