export interface FormStateType {
	[key: string]: string;
}

export interface PostTextAreaProps {
	className?: string;
	loading: boolean;
	onSubmit: (post: FormStateType) => void;
}
