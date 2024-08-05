import { Overlay, PopupContainer } from '@components/atoms/Popup/styles';
import { PopupProps } from '@components/atoms/Popup/types';

const Popup: React.FC<PopupProps> = ({ show, onClose, children }) => {
	const handleOnClose = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event?.target === event?.currentTarget) onClose();
	};
	return (
		<Overlay show={show} onClick={handleOnClose}>
			<PopupContainer show={show}>
				<div className="content">{children}</div>
			</PopupContainer>
		</Overlay>
	);
};

export default Popup;
