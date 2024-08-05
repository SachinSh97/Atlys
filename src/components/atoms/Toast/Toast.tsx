import { useEffect } from 'react';
import { ToastProps } from '@components/atoms/Toast/types';
import { ToastWrapper } from '@components/atoms/Toast/styles';

const Toast: React.FC<ToastProps> = ({ show, type = 'error', message, onClose }) => {
	useEffect(() => {
		if (show) {
			const timeoutId = setTimeout(() => {
				onClose();
				clearTimeout(timeoutId);
			}, 2000);

			return () => {
				clearTimeout(timeoutId);
			};
		}
	}, [show]);

	return (
		<ToastWrapper show={show} type={type}>
			{message}
		</ToastWrapper>
	);
};

export default Toast;
