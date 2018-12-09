import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
	return (
		<div>
			Error! 404 Page not found!
			<Link to="/">Go home</Link>
		</div>
	);
};

export default NotFoundPage;
