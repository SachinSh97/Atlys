export type type = 'logoIcon' | 'eyeIcon' | 'chatIcon' | 'moreIcon' | 'crossIcon' | 'closeEyeIcon';

export interface IconsProps {
	id?: string;
	type: type;
	onClick?: () => void;
}

export interface IconWrapperProps {
	sprite: string;
	position: string;
	styles?: React.CSSProperties;
}
