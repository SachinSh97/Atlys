import { emoji, dummyAvatar } from '@config/index';
import { UsersType, PostType } from '@type/index';

export const dummyUsers: UsersType[] = [
	{
		id: '1',
		username: 'Theresa Webb',
		email: 'theresawebb@gmail.com',
		password: '12345',
		avatar: dummyAvatar.girl,
	},
	{
		id: '2',
		username: 'Marvin McKinney',
		email: 'marvinmckinney@gmail.com',
		password: '12345',
		avatar: dummyAvatar.boy,
	},
];

export const dummyPost: PostType[] = [
	{
		id: '1',
		user: dummyUsers[0],
		content:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		emoji: emoji.hi,
		commentCount: 24,
		createdAt: '2024-08-05T07:29:17.657Z',
	},
	{
		id: '2',
		user: dummyUsers[1],
		content:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		emoji: emoji.sad,
		commentCount: 12,
		createdAt: '2024-08-05T07:29:17.657Z',
		updatedAt: '2024-08-05T07:29:17.657Z',
	},
];
