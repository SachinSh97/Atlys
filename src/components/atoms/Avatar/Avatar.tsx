import { StyledAvatar } from '@components/atoms/Avatar/styles';
import { AvatarProps } from '@components/atoms/Avatar/types';

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 44, borderColor = 'transparent' }) => {
	return (
		<StyledAvatar size={size} borderColor={borderColor}>
			<img src={src} alt={alt} />
		</StyledAvatar>
	);
};

export default Avatar;
