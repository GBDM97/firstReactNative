import { createSlice } from "@reduxjs/toolkit";
import { Store } from "./store";

export type images = {
    images: {
		id:[],
		desc:[]
	}
};

export type IimagesSlice ={
    reducer: {
        images:images
	}
}

export const initialState:images = {
	images: {
		id:[],
		desc:[]
	}
};

export const imagesSlice = createSlice({
	name: 'images',
	initialState,
	reducers: {
		changeImagesId: (state, action) => {
			state.images.id = action.payload;
		},
		changeImagesDesc: (state, action) => {
			state.images.desc = action.payload;
		}
	}
});

export const selectImages = (state:Store) => {return state};

export const { changeImagesId, changeImagesDesc } = imagesSlice.actions;

export default imagesSlice.reducer;