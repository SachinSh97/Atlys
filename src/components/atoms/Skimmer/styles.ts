import { styled, keyframes } from 'styled-components';
import { SkimmerProps } from '@components/atoms/Skimmer/types';

const glow = keyframes`
0% {
   opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

export const Avatar = styled.div<SkimmerProps>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	border-radius: ${({ isRounded }) => (isRounded ? '50%' : '0.57em')};
	background-color: var(--secondary-bg-color);
	animation: ${glow} 1.5s infinite;
`;

export const Box = styled.div<SkimmerProps>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	border-radius: ${({ isRounded }) => (isRounded ? '0.57em' : '0px')};
	background-color: var(--secondary-bg-color);
	animation: ${glow} 1.5s infinite;
`;

export const Line = styled.span<SkimmerProps>`
	font-size: ${({ fontSize }) => fontSize};
	height: 1.4em;
	width: ${({ width }) => width};
	border-radius: 20px;
	background-color: var(--secondary-bg-color);
	animation: ${glow} 1.5s infinite;
`;
