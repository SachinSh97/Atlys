import { SpinnerWrapper } from '@components/atoms/Loader/styles';

const Loader: React.FC<{ size: 'small' | 'large' }> = ({ size = 'large' }) => {
	return <SpinnerWrapper size={size} />;
};

export default Loader;
