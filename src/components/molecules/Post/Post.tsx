import React from 'react';
import { dummyAvatar } from '@config/index';
import { formatDate } from '@utils/formateDate';
import { PostProps } from '@components/molecules/Post/types';
import { Wrapper, Info, Message, Comment } from '@components/molecules/Post/styles';

const Card = React.lazy(() => import('@components/atoms/Card'));
const Icons = React.lazy(() => import('@components/atoms/Icons'));
const Avatar = React.lazy(() => import('@components/atoms/Avatar'));

const Post: React.FC<PostProps> = ({ onComingSoon, ...props }) => {
	const { user, content, emoji, commentCount, createdAt, updatedAt } = props ?? {};
	return (
		<Wrapper>
			<Card className="flex flex-column">
				<div className="flex flex-center flex-justify">
					<div className="flex flex-center">
						<Avatar src={user?.avatar ?? dummyAvatar?.boy} alt="Avatar" />
						<Info className="flex flex-column">
							<span className="name-text">{user?.username}</span>
							<span className="flex flex-center">
								<span className="time-text">{formatDate(!!updatedAt ? updatedAt : createdAt)}</span>
								{!!updatedAt && <span className="edit-text">• Edited</span>}
							</span>
						</Info>
					</div>
					<Icons type="moreIcon" onClick={onComingSoon} />
				</div>
				<Message className="flex">
					<span className="emoji flex flex-center flex-justify-center">{emoji}</span>
					<span className="text">{content}</span>
				</Message>
				<Comment className="flex flex-center">
					<Icons type="chatIcon" onClick={onComingSoon} />
					<span className="count-text">{`${commentCount} comments`}</span>
				</Comment>
			</Card>
		</Wrapper>
	);
};

export default Post;
