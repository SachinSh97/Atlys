export interface AuthenticationPopupProps {
	show: boolean;
	onFailure: (error: string) => void;
	onClose: () => void;
}
