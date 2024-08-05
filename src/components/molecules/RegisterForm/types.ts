export interface FieldPropsType {
	id: string;
	name: 'email' | 'username' | 'password';
	label: string;
	type?: string;
	placeholder: string;
	endIcon?: React.ReactNode;
}

export interface RegisterFormProps {
	onRedirect: () => void;
	onSuccess: () => void;
	onFailure: (error: string) => void;
}

export interface FormStateType {
	[key: string]: string;
}
