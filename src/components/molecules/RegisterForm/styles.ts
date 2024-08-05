import { styled } from 'styled-components';

export const Wrapper = styled.div`
	row-gap: 1.14em;
	& .textfield {
		min-width: 29.64em;
		margin-bottom: 1.14em;
	}
	& .signup-text {
		font-size: 1rem;
		font-weight: 400;
		margin-bottom: 0.57em;
		letter-spacing: 0.5px;
		color: var(--quartnery-text-color);
		text-align: center;
	}
	& .account-text {
		font-size: 1.28rem;
		font-weight: 500;
		margin-bottom: 1.56em;
		letter-spacing: 0.5px;
		color: var(--primary-text-color);
		text-align: center;
	}
	& .button {
		width: 100%;
		margin-top: 0.28em;
	}
	& .not-register-text {
		font-size: 1rem;
		font-weight: 400;
		color: var(--ternary-text-color);
	}
	& .register-text {
		font-size: 1rem;
		font-weight: 400;
		color: var(--secondary-text-color);
		margin-left: 0.28em;
		cursor: pointer;
	}
`;
