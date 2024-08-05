import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthContextProvider from '@providers/AuthProvider/context';
import { initialAuthState, storageKey } from '@config/index';
import { loadState } from '@utils/storage';
import { login, logout } from '@slices/index';
import { AuthProviderProps, AuthProviderStore } from '@providers/AuthProvider/types';
import { AuthType } from '@type/index';

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const dispatch = useDispatch();
	const initalizedState = useRef<boolean>(false);
	const [store, setStore] = useState<AuthProviderStore>(initialAuthState);

	const authenticate = useCallback((user: AuthType) => {
		setStore({ isAuthenticated: true, user });
		dispatch(login(user));
	}, []);

	const signout = useCallback(() => {
		setStore({ isAuthenticated: false, user: {} });
		dispatch(logout());
	}, []);

	useEffect(() => {
		if (!initalizedState?.current) {
			initalizedState.current = true;
			const user = loadState(storageKey.user);

			if (user) {
				authenticate(user);
			}
		}
	}, [authenticate]);

	return (
		<AuthContextProvider value={{ authenticate, signout, ...store }}>
			{children}
		</AuthContextProvider>
	);
};

export default AuthProvider;
