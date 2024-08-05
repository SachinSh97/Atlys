import { styled } from 'styled-components';

export const Wrapper = styled.div`
	height: 100%;
	img {
		width: 25em;
		height: 25em;
	}
	.page-not-found {
		font-size: 2rem;
		font-weight: 600;
		color: var(--quartnery-text-color);
		margin: 1.42em 0;
	}
	.description-text {
		font-size: 1rem;
		font-weight: 400;
		color: var(--quartnery-text-color);
		margin-top: 0.42em;
		a {
			font-weight: 500;
			color: var(--button-bg-color);
			text-decoration: none;
		}
	}
	.button {
		margin-top: 1.71em;
	}
`;
