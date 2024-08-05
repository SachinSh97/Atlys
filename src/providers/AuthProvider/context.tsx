import { createContext, useContext } from 'react';
import { AuthProviderContextType, AuthContextProviderProps } from '@providers/AuthProvider/types';

const AuthProviderContext = createContext<AuthProviderContextType | undefined>(undefined);

export const useAuth = () => {
	const context = useContext(AuthProviderContext);

	if (context === undefined) {
		throw new Error('Invalid context Provider');
	}
	return context;
};

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ value, children }) => {
	return <AuthProviderContext.Provider value={value}>{children}</AuthProviderContext.Provider>;
};

export default AuthContextProvider;
