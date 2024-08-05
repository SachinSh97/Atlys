import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@routes/constant';
import { PUBLIC_URL } from '@config/index';
import { Wrapper, Border } from '@containers/LoginContainer/styles';

const Icons = React.lazy(() => import('@components/atoms/Icons'));
const Card = React.lazy(() => import('@components/atoms/Card'));
const Toast = React.lazy(() => import('@components/atoms/Toast'));
const LoginForm = React.lazy(() => import('@components/molecules/LoginForm'));
const ComingSoon = React.lazy(() => import('@components/molecules/ComingSoon'));

const LoginContainer: React.FC = () => {
	const navigate = useNavigate();
	const [toastMessage, setToastMessage] = useState<string>('');
	const [openComingSoon, setOpenComingSoon] = useState<boolean>(false);

	const handleOnFailure = (error: string) => setToastMessage(error);

	const handleHomeRedirection = () => navigate(PUBLIC_URL + routes.home);

	const handleOnRegister = () => navigate(PUBLIC_URL + routes.register);

	const handleOnForgotPassword = () => setOpenComingSoon(true);

	const handleCloseComingSoon = () => setOpenComingSoon(false);

	const handleCloseToast = () => setToastMessage('');

	return (
		<Wrapper className="flex flex-column flex-center flex-justify-center">
			<Icons type="logoIcon" onClick={handleHomeRedirection} />
			<Border>
				<Card>
					<LoginForm
						onRedirect={handleOnRegister}
						onForgotPassword={handleOnForgotPassword}
						onFailure={handleOnFailure}
						onSuccess={handleHomeRedirection}
					/>
				</Card>
			</Border>
			<ComingSoon show={openComingSoon} onClose={handleCloseComingSoon} />
			<Toast show={!!toastMessage} message={toastMessage} onClose={handleCloseToast} />
		</Wrapper>
	);
};

export default LoginContainer;
