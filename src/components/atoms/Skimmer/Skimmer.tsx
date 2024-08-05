import React from 'react';
import { SkimmerProps } from '@components/atoms/Skimmer/types';
import { Avatar, Box, Line } from '@components/atoms/Skimmer/styles';

export const AvatarSkimmer: React.FC<SkimmerProps> = ({ width, height, isRounded = true }) => {
	return <Avatar width={width} height={height} isRounded={isRounded} />;
};

export const BoxSkimmer: React.FC<SkimmerProps> = ({ width, height, isRounded = true }) => {
	return <Box width={width} height={height} isRounded={isRounded} />;
};

export const LineSkimmer: React.FC<SkimmerProps> = ({ fontSize, width, isRounded = true }) => {
	return <Line fontSize={fontSize} width={width} isRounded={isRounded} />;
};
