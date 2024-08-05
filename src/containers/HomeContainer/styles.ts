import { styled } from 'styled-components';

export const Wrapper = styled.div`
	width: 47%;
	height: 100%;
	padding: 5em 1.71em 2.85em 1.71em;
	margin: auto;

	& .greeting-text {
		font-size: 2rem;
		font-weight: 400;
		color: var(--secondary-text-color);
	}
	& .description-text {
		width: 80%;
		font-size: 1.14rem;
		font-weight: 300;
		line-height: 1.5;
		color: var(--ternary-text-color);
		margin-top: 0.25em;
		margin-bottom: 0px;
		white-space: pre-line;
	}
	& .post-form {
		margin: 2.85em 0 1.14em 0;
	}
	@media (min-width: 360px) and (max-width: 780px) {
		padding-left: 1em;
		padding-right: 1em;
		width: calc(100% - 2em);
		& .description-text {
			width: 100%;
		}
	}
`;

export const PostWrapper = styled.div`
	width: 100%;
	row-gap: 1.14em;
`;
