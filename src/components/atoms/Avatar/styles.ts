import { styled } from 'styled-components';
import { StyledAvatarType } from '@components/atoms/Avatar/types';

export const StyledAvatar = styled.div<StyledAvatarType>`
	width: ${({ size }) => size / 14}em;
	height: ${({ size }) => size / 14}em;
	border-radius: 50%;
	overflow: hidden;
	border: 2px solid ${({ borderColor }) => borderColor};
	background-color: var(--avatar-bg-color);
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
