import { AvatarSkimmer, BoxSkimmer } from '@components/atoms/Skimmer';
import { SkeletonProps } from '@components/molecules/Skeletons/types';
import { FormWrapper } from '@components/molecules/Skeletons/styles';

const FormSkeleton: React.FC<SkeletonProps> = () => {
	return (
		<FormWrapper className="flex flex-column flex-center flex-justify-center">
			<AvatarSkimmer width="45px" height="45px" isRounded={false} />
			<BoxSkimmer width="450px" height="450px" />
		</FormWrapper>
	);
};

export default FormSkeleton;
