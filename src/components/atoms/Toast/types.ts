export interface ToastProps {
	show: boolean;
	type?: 'error' | 'success';
	message: string;
	onClose: () => void;
}
