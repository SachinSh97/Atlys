import React from 'react';
import { AuthType } from '@type/index';

export interface AuthProviderProps extends React.PropsWithChildren<object> {}

export interface AuthContextProviderProps
	extends React.PropsWithChildren<{ value: AuthProviderContextType }> {}

export interface AuthProviderStore {
	isAuthenticated: boolean;
	user: AuthType;
}

export interface AuthProviderContextType {
	isAuthenticated: boolean;
	user: AuthType;
	authenticate: (user: AuthType) => void;
	signout: () => void;
}
