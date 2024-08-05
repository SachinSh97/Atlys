import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { dummyPost } from '@utils/dummyData';
import { PostType, RootState } from '@type/index';

const initialState: PostType[] = dummyPost;

const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setPosts: (state, action: PayloadAction<PostType[]>) => {
			state = action.payload;
		},
		addPost: (state, action: PayloadAction<PostType>) => {
			state.unshift(action.payload);
		},
	},
});

export const usePostList = (): PostType[] =>
	useSelector((state: RootState) => state[postSlice.name]);

export const { setPosts, addPost } = postSlice.actions;
export default postSlice.reducer;
