import React, { useState } from 'react';
import {
	Wrapper,
	InputWrapper,
	Label,
	ControlAction,
	Icon,
	ErrorText,
} from '@components/atoms/TextField/styles';
import { TextFieldProps } from '@components/atoms/TextField/types';

const Icons = React.lazy(() => import('@components/atoms/Icons'));

const TextField: React.FC<TextFieldProps> = ({
	id,
	label,
	name,
	type = 'text',
	placeholder,
	value,
	rows = 1,
	error = false,
	helperText,
	startIcon,
	endIcon,
	controlAction,
	onAction,
	onChange,
	onBlur,
}) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleEyeOnClick = () => setShowPassword((prevState) => !prevState);
	return (
		<Wrapper className="textfield flex flex-column">
			<div className="flex flex-center flex-justify">
				{label && <Label>{label}</Label>}
				{controlAction && <ControlAction onClick={onAction}>{controlAction}</ControlAction>}
			</div>
			<InputWrapper error={error}>
				{startIcon && <Icon position="start">{startIcon}</Icon>}
				{type === 'textarea' ? (
					<textarea
						id={id}
						name={name}
						placeholder={placeholder}
						value={value}
						rows={rows}
						onBlur={onBlur}
						onChange={onChange}
					/>
				) : (
					<input
						id={id}
						name={name}
						type={type === 'password' && showPassword ? 'text' : type}
						placeholder={placeholder}
						value={value}
						onBlur={onBlur}
						onChange={onChange}
					/>
				)}
				{(endIcon || type === 'password') && (
					<Icon position="end">
						{type === 'password' ? (
							<Icons type={showPassword ? 'eyeIcon' : 'closeEyeIcon'} onClick={handleEyeOnClick} />
						) : (
							endIcon
						)}
					</Icon>
				)}
			</InputWrapper>
			{error && helperText && <ErrorText>{helperText}</ErrorText>}
		</Wrapper>
	);
};

export default TextField;
