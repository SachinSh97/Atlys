import { styled } from 'styled-components';

export const ToastWrapper = styled.div<{ show: boolean; type: 'error' | 'success' }>`
	display: ${({ show }) => (show ? 'block' : 'none')};
	position: absolute;
	bottom: 1.14em;
	right: ${({ show }) => (show ? '1.14em' : '-100%')};
	max-width: 18.57em;
	font-size: 1rem;
	font-weight: 400;
	color: ${({ type }) => (type ? 'var(--danger-color)' : '')};
	padding: 1em 1.42em;
	border-radius: 0.57em;
	background: var(--secondary-bg-color);
	border: 1px solid ${({ type }) => (type === 'error' ? 'var(--danger-color)' : '')};
	transition: all 1s ease-in-out;
	z-index: 9999;
`;
