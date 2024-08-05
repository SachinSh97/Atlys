import React from 'react';
import { useForm } from '@hooks/useForm';
import { validateRequired } from '@utils/validation';
import { emoji } from '@config/index';
import { Wrapper, PostType, TextFieldWrapper } from '@components/molecules/CreatePostForm/styles';
import { PostTextAreaProps, FormStateType } from '@components/molecules/CreatePostForm/types';

const Card = React.lazy(() => import('@components/atoms/Card'));
const TextField = React.lazy(() => import('@components/atoms/TextField'));
const Button = React.lazy(() => import('@components/atoms/Button'));

const initialFormState: FormStateType = { content: '', emoji: emoji?.text };
const validationRules = { content: validateRequired };

const PostTextArea: React.FC<PostTextAreaProps> = ({ className, loading, onSubmit }) => {
	const { values, errors, handleReset, handleChange, handleSubmit } = useForm(
		initialFormState,
		validationRules,
	);

	const handleOnPost = () => {
		onSubmit(values);
		handleReset();
	};

	return (
		<Wrapper className={className}>
			<Card>
				<form className="flex flex-column" onSubmit={handleSubmit(handleOnPost)}>
					<TextFieldWrapper className="flex flex-center">
						<PostType className="flex flex-center flex-justify-center">{values?.emoji}</PostType>
						<TextField
							id="message"
							type="textarea"
							name="content"
							placeholder="How are you feeling today?"
							error={!!errors?.content}
							helperText={errors?.content ?? ''}
							value={values?.content}
							onChange={handleChange}
						/>
					</TextFieldWrapper>
					<Button loading={loading} type="submit">
						Post
					</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default PostTextArea;
