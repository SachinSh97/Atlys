import { styled } from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
`;

export const ControlAction = styled.span`
	display: block;
	font-size: 0.85rem;
	font-weight: 300;
	color: var(--secondary-text-color);
	margin-bottom: 0.83em;
	cursor: pointer;
`;

export const Label = styled.label`
	display: block;
	font-size: 1rem;
	font-weight: 300;
	margin-bottom: 0.71em;
	color: var(--secondary-text-color);
`;

export const InputWrapper = styled.div<{ error: boolean }>`
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;

	input,
	textarea {
		width: 100%;
		font-size: 1.14rem;
		font-weight: 400;
		padding: 0.75em;
		color: var(--primary-text-color);
		border-radius: 0.25em;
		border: ${({ error }) =>
			error ? '1px solid var(--danger-color)' : '1.5px solid var(--input-border-color)'};
		background-color: transparent;
		transition: border 0.1s ease-in-out;

		&::placeholder {
			font-family: 'Inter', sans-serif;
			font-size: 1.14em;
			font-weight: 300;
			color: var(--ternary-text-color);
		}

		&:focus-visible {
			outline: none;
			border-color: var(--input-outline-color);
		}
	}
	textarea {
		min-height: 1.42em;
		resize: none;
	}
`;

export const Icon = styled.div<{ position: 'start' | 'end' }>`
	position: absolute;
	display: flex;
	align-items: center;
	cursor: pointer;
	${(props) => (props?.position === 'start' ? 'left: 0.71em;' : 'right: 0.71em;')}
`;

export const ErrorText = styled.span`
	display: block;
	font-size: 0.85rem;
	color: var(--danger-color);
	margin-top: 0.28em;
`;
