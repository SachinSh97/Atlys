export interface FieldPropsType {
	id: string;
	name: 'email' | 'password';
	label: string;
	type?: string;
	placeholder: string;
	controlAction?: string;
}

export interface LoginFormProps {
	onRedirect: () => void;
	onForgotPassword?: () => void;
	onSuccess: () => void;
	onFailure: (error: string) => void;
}

export interface FormStateType {
	[key: string]: string;
}
