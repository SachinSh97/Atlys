import { styled } from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	& .card form {
		width: calc(100% - 2.84em);
		row-gap: 1.14em;
		padding: 1.71em 1.42em;
		& .create-post-text {
			font-size: 1.28rem;
			font-weight: 400;
			color: var(--secondary-text-color);
		}
		& .button {
			align-self: flex-end;
		}
	}
`;

export const TextFieldWrapper = styled.div`
	padding: 1.14em;
	border-radius: 0.57em;
	background-color: var(--ternary-bg-color);
	.textfield textarea {
		border: none;
	}
`;

export const PostType = styled.div`
	min-width: 2.66em;
	height: 2.66em;
	font-size: 1.28rem;
	border-radius: 50%;
	background-color: var(--secondary-bg-color);
	cursor: pointer;
	transition: filter 0.3s ease;
	&:hover {
		filter: contrast(0.9);
	}
`;
