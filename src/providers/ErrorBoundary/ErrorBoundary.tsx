import React, { Component, ErrorInfo } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '@providers/ErrorBoundary/types';

const PageNotFound = React.lazy(() => import('@components/molecules/PageNotFound'));

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(_: Error): ErrorBoundaryState {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// We can also log the error to an error reporting service like sentry
		console.error('Uncaught error:', error, errorInfo);
	}

	render() {
		const { hasError } = this.state ?? {};
		const { children } = this.props;
		if (hasError) {
			return <PageNotFound />;
		}

		return children;
	}
}

export default ErrorBoundary;
