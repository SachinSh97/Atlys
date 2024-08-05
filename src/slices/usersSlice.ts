import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { verifyPassword } from '@utils/helper';
import { dummyUsers } from '@utils/dummyData';
import { RootState, UsersType, FindUserType } from '@type/index';

const initialState: UsersType[] = dummyUsers;

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (state, action: PayloadAction<UsersType[]>) => {
			state = action.payload;
		},
		addUser: (state, action: PayloadAction<UsersType>) => {
			state.push(action.payload);
		},
	},
});

export const useFindUser = (payload: FindUserType): UsersType | undefined =>
	useSelector((state: RootState) =>
		state[userSlice?.name]?.find(
			(user: UsersType) =>
				[user?.email, user?.username]?.includes(payload?.email) &&
				verifyPassword(user?.password, payload?.password),
		),
	);

export const useUserList = (): UsersType[] =>
	useSelector((state: RootState) => state[userSlice?.name]);

export const { setUsers, addUser } = userSlice.actions;
export default userSlice.reducer;
