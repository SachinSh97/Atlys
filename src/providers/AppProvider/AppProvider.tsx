import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PUBLIC_URL } from '@config/index';
import AuthProvider from '@providers/AuthProvider';
import GlobalStyle from '@styles/globalStyles';
import { AppProviderProps } from '@providers/AppProvider/types';
import Loader from '@components/atoms/Loader';

const ErrorBoundary = React.lazy(() => import('@providers/ErrorBoundary'));

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	return (
		<Suspense fallback={<Loader size="large" />}>
			<GlobalStyle />
			<ErrorBoundary>
				<AuthProvider>
					<Router basename={PUBLIC_URL}>{children}</Router>
				</AuthProvider>
			</ErrorBoundary>
		</Suspense>
	);
};

export default React.memo(AppProvider);
