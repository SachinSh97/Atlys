import { styled } from 'styled-components';
import { IconWrapperProps } from '@components/atoms/Icons/types';

export const IconWrapper = styled.span<IconWrapperProps>`
	width: 1.42em;
	height: 1.42em;
	background-image: ${(props) => `url(${props?.sprite})`};
	background-position: ${(props) => props?.position};
	background-repeat: no-repeat;
	cursor: pointer;
	transition: transform 0.2s, box-shadow 0.2s;
	&:hover {
		transform: scale(1.05);
		box-shadow: 0 4px 8px var(--box-shadow-color);
	}
`;
