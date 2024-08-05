import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '@slices/authSlice';
import postReducer from '@slices/postSlice';
import usersReducer from '@slices/usersSlice';

const rootReducer = combineReducers({
	auth: authReducer,
	users: usersReducer,
	posts: postReducer,
});

const persistConfig = {
	key: 'app',
	storage,
	blacklist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({ reducer: persistedReducer, devTools: true });

export const persistor = persistStore(store);

export default store;
