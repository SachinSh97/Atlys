import { ChangeEvent, ReactNode } from 'react';

export interface TextFieldProps {
	id: string;
	label?: string;
	name: string;
	type?: string;
	placeholder?: string;
	value: string;
	rows?: number;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
	error?: boolean;
	helperText?: string;
	controlAction?: string;
	onAction?: () => void;
	onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onBlur?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
