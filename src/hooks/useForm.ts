import React, { useState } from 'react';
import { ValidationRulesType, ObjectType } from '@hooks/types';

export const useForm = (initialValues: ObjectType, validationRules: ValidationRulesType) => {
	const [values, setValues] = useState<ObjectType>(initialValues);
	const [errors, setError] = useState<ObjectType>({});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event?.target ?? {};
		setValues({ ...values, [name]: value });

		if (validationRules[name]) {
			const error = validationRules?.[name]?.(value);
			setError({ ...errors, [name]: error });
		}
	};

	const handleSubmit = (callback: () => void) => (event: React.FormEvent<HTMLFormElement>) => {
		event?.preventDefault();
		const validationErrors: ObjectType = {};
		let isValid = true;

		for (const key in validationRules) {
			const error = validationRules?.[key]?.(values[key]);
			if (error) {
				isValid = false;
				validationErrors[key] = error;
			}
		}

		setError(validationErrors);
		if (isValid) callback();
	};

	const handleReset = () => setValues(initialValues);

	return { values, errors, handleReset, handleChange, handleSubmit };
};
