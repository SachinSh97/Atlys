export interface FormProps {
	initialValues: ObjectType;
	validationRules: ValidationRulesType;
}

export interface ValidationRulesType {
	[key: string]: (value: string) => string;
}

export interface ObjectType {
	[key: string]: string;
}
