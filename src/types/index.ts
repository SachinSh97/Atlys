import store from '@store/index';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface PostType {
	id: string;
	user: UsersType | AuthType;
	content: string;
	emoji: string;
	commentCount?: number;
	createdAt: string;
	updatedAt?: string;
}

export interface AuthType {
	id?: string;
	username?: string;
	email?: string;
	password?: string;
	avatar?: string;
}

export interface UsersType {
	id: string;
	username: string;
	email: string;
	password: string;
	avatar?: string;
}

export interface ResourceType {
	[key: string]: string | { [key: string]: string };
}

export interface FindUserType {
	email: string;
	password: string;
}
