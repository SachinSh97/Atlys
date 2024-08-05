import { CardProps } from '@components/atoms/Card/types';
import { Wrapper } from '@components/atoms/Card/styles';

const Card: React.FC<CardProps> = ({ className = '', children }) => {
	return <Wrapper className={`card ${className}`}>{children}</Wrapper>;
};

export default Card;
