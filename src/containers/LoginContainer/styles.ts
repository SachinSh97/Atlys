import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	row-gap: 3.71em;
	background-color: var(--primary-bg-color);

	& .logoIcon {
		transform: scale(2);
		cursor: pointer;
		transition: transform 0.2s;
		&:hover {
			transform: scale(2.05);
		}
	}
	& .card {
		position: relative;
		padding: 2.85em 1.71em;
		z-index: 1;
	}
	@media (min-width: 360px) and (max-width: 780px) {
		& .textfield {
			min-width: 22em !important;
		}
		& .card {
			padding: 2.85em 1em !important;
		}
	}
`;

export const Border = styled.div`
	position: relative;
	&:after {
		content: ' ';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100.8%;
		height: 100.8%;
		border-radius: 0.57em;
		background: linear-gradient(
			-48deg,
			var(--primary-popup-bg-color),
			var(--secondary-popup-bg-color)
		);
	}
`;
