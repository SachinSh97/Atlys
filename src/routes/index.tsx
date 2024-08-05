import React from 'react';
import { useRoutes } from 'react-router-dom';
import { RouterProps } from '@routes/types';

const Router = (props: RouterProps) => {
	const { routes } = props;

	return useRoutes(routes);
};

export { default as routes } from './routes';
export default React.memo(Router);
