export interface ButtonProps {
	loading?: boolean;
	type?: 'button' | 'submit' | 'reset' | undefined;
	disabled?: boolean;
	children: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
