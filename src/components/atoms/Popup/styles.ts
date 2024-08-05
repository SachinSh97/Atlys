import { styled, keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeOutDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const Overlay = styled.div<{ show: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: var(--overlay-bg-color);
	display: ${({ show }) => (show ? 'flex' : 'none')};
	align-items: center;
	justify-content: center;
	backdrop-filter: blur(2px);
	z-index: 1000;
`;

export const PopupContainer = styled.div<{ show: boolean }>`
	position: relative;
	width: 80%;
	max-width: 32em;
	padding: 1.42em;
	border-radius: 0.57em;
	background: linear-gradient(
		-48deg,
		var(--primary-popup-bg-color),
		var(--secondary-popup-bg-color)
	);
	animation: ${({ show }) => (show ? fadeInUp : fadeOutDown)} 0.3s ease-out;
	&:after {
		content: ' ';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 99.2%;
		height: 99.2%;
		border-radius: 0.57em;
		transform: translate(-50%, -50%);
		background: var(--secondary-bg-color);
	}
	.content {
		position: relative;
		z-index: 1;
	}
`;
