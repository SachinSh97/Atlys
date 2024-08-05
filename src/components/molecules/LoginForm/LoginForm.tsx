import React, { useState } from 'react';
import { useForm } from '@hooks/useForm';
import { useAuth } from '@providers/AuthProvider';
import { useUserList } from '@slices/index';
import { validateRequired, validateMinLength } from '@utils/validation';
import { verifyPassword } from '@utils/helper';
import {
	LoginFormProps,
	FieldPropsType,
	FormStateType,
} from '@components/molecules/LoginForm/types';
import { UsersType } from '@type/index';
import { Wrapper } from '@components/molecules/LoginForm/styles';

const TextField = React.lazy(() => import('@components/atoms/TextField'));
const Button = React.lazy(() => import('@components/atoms/Button'));

const fieldsProps: Array<FieldPropsType> = [
	{
		id: 'email',
		name: 'email',
		label: 'Email or Username',
		placeholder: 'Enter your email or username',
	},
	{
		id: 'password',
		name: 'password',
		type: 'password',
		label: 'Password',
		placeholder: 'Enter your password',
		controlAction: 'Forgot password?',
	},
];
const initialFormState: FormStateType = { username: '', password: '' };
const validationRules = { email: validateRequired, password: validateMinLength(8) };

const LoginForm: React.FC<LoginFormProps> = ({
	onRedirect,
	onForgotPassword,
	onSuccess,
	onFailure,
}) => {
	const users: UsersType[] = useUserList();
	const { authenticate } = useAuth();
	const { values, errors, handleChange, handleSubmit } = useForm(initialFormState, validationRules);
	const [loading, setLoading] = useState<boolean>(false);

	const handleOnSubmit = async () => {
		try {
			setLoading(true);
			const existingUser = users?.find((user: UsersType) =>
				[user?.email, user?.username]?.includes(values?.email),
			);

			if (!!existingUser) {
				const isPasswordCorrect = await verifyPassword(values?.password, existingUser?.password);
				if (!isPasswordCorrect) throw new Error('Invalid login details');
				authenticate(existingUser);
				onSuccess();
			} else throw new Error('User does not exist.');
		} catch (error) {
			onFailure((error as { message: string })?.message ?? '');
		} finally {
			setLoading(false);
		}
	};

	return (
		<Wrapper className="flex flex-column">
			<div className="flex flex-column">
				<span className="welcome-text">WELCOME BACK</span>
				<span className="login-text">Log into your account</span>
			</div>
			<form onSubmit={handleSubmit(handleOnSubmit)}>
				{fieldsProps?.map((props) => (
					<TextField
						{...props}
						key={props?.id}
						error={!!errors?.[props?.name]}
						helperText={errors?.[props?.name] ?? ''}
						value={values?.[props?.name] ?? ''}
						onAction={props?.name === 'password' ? onForgotPassword : () => null}
						onChange={handleChange}
					/>
				))}
				<Button type="submit" loading={loading}>
					Login now
				</Button>
			</form>
			<div className="flex flex-center">
				<span className="not-register-text">Not registered yet?</span>
				<span className="register-text" onClick={onRedirect}>
					Register →
				</span>
			</div>
		</Wrapper>
	);
};

export default LoginForm;
