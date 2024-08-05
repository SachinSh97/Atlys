import { styled } from 'styled-components';

export const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	column-gap: 0.57em;
	min-width: 8em;
	min-height: 2.85em;
	font-weight: 400;
	color: var(--primary-text-color);
	text-align: center;
	letter-spacing: 0.5px;
	padding: 0.85em;
	border-radius: 0.28em;
	border: none;
	outline: none;
	background-color: var(--button-bg-color);
	transition: background-color 0.3s ease, color 0.3s ease;
	cursor: pointer;

	&:disabled {
		cursor: not-allowed;
	}
	&:hover {
		background-color: var(--button-hover-bg-color);
	}
`;
