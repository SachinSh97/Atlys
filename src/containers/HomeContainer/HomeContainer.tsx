import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '@providers/AuthProvider';
import { usePostList } from '@slices/index';
import { emoji } from '@config/index';
import { resources } from '@resources/index';
import { generateUniqueId } from '@utils/helper';
import { addPost } from '@slices/index';
import { Wrapper, PostWrapper } from '@containers/HomeContainer/styles';
import { FormStateType } from '@components/molecules/CreatePostForm/types';
import { PostType } from '@type/index';

const CreatePostForm = React.lazy(() => import('@components/molecules/CreatePostForm'));
const Post = React.lazy(() => import('@components/molecules/Post'));
const Toast = React.lazy(() => import('@components/atoms/Toast'));
const AuthenticationPopup = React.lazy(() => import('@components/molecules/AuthenticationPopup'));
const ComingSoon = React.lazy(() => import('@components/molecules/ComingSoon'));

const homeResources = resources.home;
const Home: React.FC = () => {
	const dispatch = useDispatch();
	const { isAuthenticated, user } = useAuth();
	const postList: PostType[] = usePostList();
	const [toastMessage, setToastMessage] = useState<string>('');
	const [openAuthenticationPopup, setOpenAuthenticationPopup] = useState<boolean>(false);
	const [openComingSoon, setOpenComingSoon] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const checkIsAuthenticated = () => {
		if (!isAuthenticated) {
			setOpenAuthenticationPopup(true);
		}
		return isAuthenticated;
	};

	const handleOnSubmit = (post: FormStateType) => {
		try {
			if (!checkIsAuthenticated()) return;
			setLoading(true);

			const payload: PostType = {
				id: generateUniqueId(),
				user,
				content: post?.content,
				emoji: post?.emoji,
				createdAt: new Date().toISOString(),
			};
			dispatch(addPost(payload));
		} catch (error) {
			handleOnFailure((error as { message: string })?.message ?? 'Something went wrong.');
		} finally {
			setLoading(false);
		}
	};

	const handleOnFailure = (error: string) => setToastMessage(error);

	const handleOnComingSoon = () => setOpenComingSoon(true);

	const handleCloseAuthenticationPopup = () => setOpenAuthenticationPopup(false);

	const handleCloseComingSoon = () => setOpenComingSoon(false);

	const handleCloseToast = () => setToastMessage('');

	return (
		<>
			<Wrapper className="flex flex-column flex-center">
				<div className="flex flex-column width-100">
					<span className="greeting-text">
						{`${homeResources.hello} ${user?.username ?? 'Guest'}`}
					</span>
					<p className="description-text">
						{`How are you doing today? Would you like to share something with the community ${emoji?.happy}`}
					</p>
				</div>
				<CreatePostForm className="post-form" loading={loading} onSubmit={handleOnSubmit} />
				<PostWrapper className="flex flex-column" onClick={checkIsAuthenticated}>
					{postList?.map((postDetails: PostType, index: number) => (
						<Post
							key={postDetails?.id ?? index}
							{...postDetails}
							onComingSoon={isAuthenticated ? handleOnComingSoon : () => {}}
						/>
					))}
				</PostWrapper>
			</Wrapper>
			<AuthenticationPopup
				show={openAuthenticationPopup}
				onFailure={handleOnFailure}
				onClose={handleCloseAuthenticationPopup}
			/>
			<ComingSoon show={openComingSoon} onClose={handleCloseComingSoon} />
			<Toast show={!!toastMessage} message={toastMessage} onClose={handleCloseToast} />
		</>
	);
};

export default Home;
