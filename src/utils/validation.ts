import { regex } from '@config/index';

export const validateRequired = (value: string) => {
	return value?.trim() ? '' : 'This field is required';
};

export const validateEmail = (value: string) => {
	return regex.emailRegex?.test(value) ? '' : 'Invalid email address';
};

export const validateMinLength = (minLength: number) => (value: string) => {
	return value?.length >= minLength ? '' : `Minimum required length is ${minLength}`;
};
