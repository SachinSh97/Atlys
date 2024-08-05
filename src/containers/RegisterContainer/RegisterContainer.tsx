import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@routes/constant';
import { PUBLIC_URL } from '@config/index';
import { Container, Border } from '@containers/RegisterContainer/styles';

const Icons = React.lazy(() => import('@components/atoms/Icons'));
const Card = React.lazy(() => import('@components/atoms/Card'));
const Toast = React.lazy(() => import('@components/atoms/Toast'));
const RegisterForm = React.lazy(() => import('@components/molecules/RegisterForm'));

const LoginContainer: React.FC = () => {
	const navigate = useNavigate();
	const [toastMessage, setToastMessage] = useState<string>('');

	const handleOnFailure = (error: string) => setToastMessage(error);

	const handleHomeRedirection = () => navigate(PUBLIC_URL + routes.home);

	const handleOnLogin = () => navigate(PUBLIC_URL + routes.login);

	const handleCloseToast = () => setToastMessage('');

	return (
		<Container className="flex flex-column flex-center flex-justify-center">
			<Icons type="logoIcon" onClick={handleHomeRedirection} />
			<Border>
				<Card>
					<RegisterForm
						onRedirect={handleOnLogin}
						onFailure={handleOnFailure}
						onSuccess={handleOnLogin}
					/>
				</Card>
			</Border>
			<Toast show={!!toastMessage} message={toastMessage} onClose={handleCloseToast} />
		</Container>
	);
};

export default LoginContainer;
