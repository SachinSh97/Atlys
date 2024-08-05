import { BoxSkimmer, LineSkimmer } from '@components/atoms/Skimmer';
import { SkeletonProps } from '@components/molecules/Skeletons/types';
import { HomeWrapper } from '@components/molecules/Skeletons/styles';

const PostSkeleton: React.FC<SkeletonProps> = () => {
	return (
		<HomeWrapper className="flex flex-column">
			<LineSkimmer fontSize="28px" width="40%" />
			<span className="flex flex-column width-100 heading">
				<LineSkimmer fontSize="16px" width="100%" />
				<LineSkimmer fontSize="16px" width="50%" />
			</span>
			{[1, 2, 3]?.map((_i) => (
				<>
					<BoxSkimmer key={_i} width="100%" height="260px" />
					<br />
				</>
			))}
		</HomeWrapper>
	);
};

export default PostSkeleton;
