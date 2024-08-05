import { styled } from 'styled-components';

export const Content = styled.div`
	position: relative;
	padding: 1.42em 0;
	.crossIcon {
		position: absolute;
		top: 0;
		right: 0;
		transform: scale(1.4);
		&:hover {
			transform: scale(1.45);
		}
	}

	@media (min-width: 360px) and (max-width: 780px) {
		& .textfield {
			min-width: 20em !important;
		}
	}
`;
