import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { saveState, removeState } from '@utils/storage';
import { storageKey } from '@config/index';
import { AuthType, RootState } from '@type/index';

const initialState: AuthType = { id: '', username: '', email: '', password: '' };

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<AuthType>) => {
			state = action.payload;
			saveState(storageKey.user, action.payload);
		},
		logout: (state) => {
			state = initialState;
			removeState(storageKey.user);
		},
	},
});

export const useUserInfo = (): AuthType => useSelector((state: RootState) => state[authSlice.name]);

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
