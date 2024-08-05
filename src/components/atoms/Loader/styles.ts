import { styled, keyframes, css } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div<{ size: 'small' | 'large' }>`
	display: inline-block;
	border: 4px solid var(--secondary-border-color);
	border-radius: 50%;
	border-top-color: var(--primary-border-color);
	animation: ${spin} 1s linear infinite;

	${({ size }) =>
		size === 'small'
			? css`
					width: 0.83em;
					height: 0.83em;
					border-width: 0.14em;
			  `
			: css`
					width: 3.42em;
					height: 3.42em;
			  `}
`;
