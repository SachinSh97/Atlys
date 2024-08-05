import React from 'react';
import { StyledButton } from '@components/atoms/Button/styles';
import { ButtonProps } from '@components/atoms/Button/types';

const Loader = React.lazy(() => import('@components/atoms/Loader'));

const Button: React.FC<ButtonProps> = ({
	loading = false,
	type = 'button',
	disabled,
	children,
	onClick,
}) => {
	return (
		<StyledButton className="button" type={type} disabled={disabled || loading} onClick={onClick}>
			{children}
			{loading && <Loader size="small" />}
		</StyledButton>
	);
};

export default Button;
