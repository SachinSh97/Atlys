import React from 'react';
import { IconsProps } from '@components/atoms/Icons/types';
import { IconWrapper } from '@components/atoms/Icons/styles';
import iconSprite from '@assets/sprites/icons-sprite.svg';

const Icons: React.FC<IconsProps> = ({ id, type, onClick }) => {
	const position: string = iconPosition(type);
	return (
		<IconWrapper
			id={id}
			className={type}
			sprite={iconSprite}
			position={position}
			onClick={onClick}
		/>
	);
};

const iconPosition = (type: string): string =>
	({
		logoIcon: '-30px 0px',
		chatIcon: '0px 0px',
		crossIcon: '-60px 0px',
		eyeIcon: '-90px 0px',
		closeEyeIcon: '-120px 0px',
		moreIcon: '-150px 0px',
	}[type] ?? '');

export default React.memo(Icons);
