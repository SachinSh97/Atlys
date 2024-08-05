import { PostType } from '@type/index';

export interface PostProps extends PostType {
	onComingSoon?: () => void;
}
