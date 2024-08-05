import { styled } from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	.card {
		width: calc(100% - 2.84em);
		padding: 1.71em 1.42em;
	}
`;

export const Info = styled.span`
	margin-left: 1.14em;
	.name-text {
		font-size: 1.14em;
		font-weight: 400;
		color: var(--secondary-text-color);
	}
	.time-text {
		font-size: 1rem;
		font-weight: 400;
		color: var(--ternary-text-color);
		margin-top: 0.28em;
	}
	.edit-text {
		font-size: 1rem;
		font-weight: 400;
		color: var(--ternary-text-color);
		margin-top: 0.28em;
		margin-left: 0.28em;
	}
`;
export const Message = styled.div`
	padding: 1.14em;
	margin-top: 1.42em;
	border-radius: 0.57em;
	column-gap: 0.85em;
	background-color: var(--ternary-bg-color);
	.emoji {
		font-size: 1.28rem;
		min-width: 2.66em;
		height: 2.66em;
		border-radius: 50%;
		background-color: var(--secondary-bg-color);
	}
	.text {
		font-size: 1.14rem;
		font-weight: 400;
		color: var(--ternary-text-color);
		line-height: 1.6;
	}
`;

export const Comment = styled.div`
	margin-top: 0.85em;
	.count-text {
		font-size: 1rem;
		font-weight: 400;
		color: var(--ternary-text-color);
		margin-left: 0.57em;
	}
`;
