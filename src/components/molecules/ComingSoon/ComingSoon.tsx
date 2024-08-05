import React from 'react';
import { Wrapper } from '@components/molecules/ComingSoon/styles';
import comingSoon from '@assets/images/coming-soon.svg';

const Popup = React.lazy(() => import('@components/atoms/Popup'));

const ComingSoon: React.FC<{ show: boolean; onClose: () => void }> = ({ show, onClose }) => {
	return (
		<Popup show={show} onClose={onClose}>
			<Wrapper className="flex flex-center flex-justify-center">
				<img src={comingSoon} alt="coming-soon" />
			</Wrapper>
		</Popup>
	);
};

export default ComingSoon;
