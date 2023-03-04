import { createSlice } from "@reduxjs/toolkit";

export type images = {
    images: []
};

export type IimagesSlice ={
    reducer: {
        images:images
	}
}

export const initialState:images = {
	images: []
};

export const imagesSlice = createSlice({
	name: 'images',
	initialState,
	reducers: {
		changeImagesInfo: (state, action) => {
			state.images = action.payload.nativeEvent.text;
		}
	}
});

export const selectImages = (state:images) => {return state.images};

export const { changeImagesInfo } = imagesSlice.actions;

export default imagesSlice.reducer;