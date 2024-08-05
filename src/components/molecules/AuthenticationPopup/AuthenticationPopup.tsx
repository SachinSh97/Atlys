import React, { useState } from 'react';
import { Content } from '@components/molecules/AuthenticationPopup/styles';
import { AuthenticationPopupProps } from '@components/molecules/AuthenticationPopup/types';

const Icons = React.lazy(() => import('@components/atoms/Icons'));
const Popup = React.lazy(() => import('@components/atoms/Popup'));
const LoginForm = React.lazy(() => import('@components/molecules/LoginForm'));
const RegisterForm = React.lazy(() => import('@components/molecules/RegisterForm'));

const AuthenticationPopup: React.FC<AuthenticationPopupProps> = ({ show, onFailure, onClose }) => {
	const [showLoginForm, setShowLoginForm] = useState<boolean>(false);

	const handleOnRedirect = () => setShowLoginForm((prevState) => !prevState);

	const handleOnSuccess = () => {
		if (showLoginForm) onClose();
		else setShowLoginForm(true);
	};

	const Component = showLoginForm ? LoginForm : RegisterForm;
	return (
		<Popup show={show} onClose={onClose}>
			<Content>
				<Icons type="crossIcon" onClick={onClose} />
				<Component
					onRedirect={handleOnRedirect}
					onSuccess={handleOnSuccess}
					onFailure={onFailure}
				/>
			</Content>
		</Popup>
	);
};

export default AuthenticationPopup;
