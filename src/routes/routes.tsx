import React, { Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { routes } from '@routes/constant';
import { FormSkeleton, HomeSkeleton } from '@components/molecules/Skeletons';

// containers
const LoginContainer = React.lazy(() => import('@containers/LoginContainer'));
const RegisterContainer = React.lazy(() => import('@containers/RegisterContainer'));
const HomeContainer = React.lazy(() => import('@containers/HomeContainer'));
//component
const PageNotFound = React.lazy(() => import('@components/molecules/PageNotFound'));

export default [
	{ path: '/', element: <Navigate to={`/${routes.login}`} /> },
	{
		path: `/${routes.login}`,
		element: (
			<Suspense fallback={<FormSkeleton />}>
				<LoginContainer />
			</Suspense>
		),
	},
	{
		path: `/${routes.register}`,
		element: (
			<Suspense fallback={<FormSkeleton />}>
				<RegisterContainer />
			</Suspense>
		),
	},
	{
		path: `/${routes.home}`,
		element: (
			<Suspense fallback={<HomeSkeleton />}>
				<HomeContainer />
			</Suspense>
		),
	},
	{ path: '*', element: <PageNotFound /> },
] as Array<RouteObject>;
