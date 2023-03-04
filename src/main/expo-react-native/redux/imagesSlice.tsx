import { createSlice } from "@reduxjs/toolkit";
import { Store } from "./store";

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
			state.images = action.payload;
		}
	}
});

export const selectImages = (state:Store) => {return state};

export const { changeImagesInfo } = imagesSlice.actions;

export default imagesSlice.reducer;