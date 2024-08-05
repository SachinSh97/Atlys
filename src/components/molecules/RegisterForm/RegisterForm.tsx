import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '@hooks/useForm';
import { useUserList, addUser } from '@slices/index';
import { generateUniqueId, hashPassword } from '@utils/helper';
import { validateRequired, validateEmail, validateMinLength } from '@utils/validation';
import { FieldPropsType, RegisterFormProps } from '@components/molecules/RegisterForm/types';
import { UsersType } from '@type/index';
import { Wrapper } from '@components/molecules/RegisterForm/styles';

const TextField = React.lazy(() => import('@components/atoms/TextField'));
const Button = React.lazy(() => import('@components/atoms/Button'));

const fieldsProps: Array<FieldPropsType> = [
	{
		id: 'email',
		name: 'email',
		label: 'Email',
		placeholder: 'Enter your email',
	},
	{
		id: 'username',
		name: 'username',
		label: 'Username',
		placeholder: 'Choose a preferred username',
	},
	{
		id: 'password',
		name: 'password',
		type: 'password',
		label: 'Password',
		placeholder: 'Choose a strong password',
	},
];
const initialFormState = { email: '', username: '', password: '' };
const validationRules = {
	email: validateEmail,
	username: validateRequired,
	password: validateMinLength(8),
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onRedirect, onSuccess, onFailure }) => {
	const dispatch = useDispatch();
	const users: UsersType[] = useUserList();
	const { values, errors, handleChange, handleSubmit } = useForm(initialFormState, validationRules);
	const [loading, setLoading] = useState<boolean>(false);

	const handleOnSubmit = async () => {
		try {
			setLoading(true);
			let existingUser;

			existingUser = users?.find((user: UsersType) => user?.email === values?.email);
			if (!!existingUser) throw new Error('Account exist with the email.');
			existingUser = users?.find((user: UsersType) => user?.username === values?.username);
			if (!!existingUser) throw new Error('Username is already taken.');

			const password = await hashPassword(values?.password);
			const payload: UsersType = {
				id: generateUniqueId(),
				email: values?.email,
				username: values?.username,
				password,
			};

			dispatch(addUser(payload));
			onSuccess();
		} catch (error) {
			onFailure((error as { message: string })?.message ?? '');
		} finally {
			setLoading(false);
		}
	};

	return (
		<Wrapper className="flex flex-column">
			<div className="flex flex-column">
				<span className="signup-text">SIGN UP</span>
				<span className="account-text">Create an account to continue</span>
			</div>
			<form onSubmit={handleSubmit(handleOnSubmit)}>
				{fieldsProps?.map((props) => (
					<TextField
						key={props?.id}
						{...props}
						error={!!errors?.[props?.name]}
						helperText={errors?.[props?.name] ?? ''}
						value={values?.[props?.name]}
						onChange={handleChange}
					/>
				))}
				<Button type="submit" loading={loading}>
					Continue
				</Button>
			</form>
			<div className="flex flex-center">
				<span className="not-register-text">Already have an account? </span>
				<span className="register-text" onClick={onRedirect}>
					Login →
				</span>
			</div>
		</Wrapper>
	);
};

export default RegisterForm;
