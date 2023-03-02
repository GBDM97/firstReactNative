import { createSlice } from "@reduxjs/toolkit";

export type person = {
	id: number,
	name: string,
    image: string,
    imageName: string
};

export const initialState:person = {
	id: 0,
	name: "",
    image: "",
    imageName: ""
};

export const personSlice = createSlice({
	name: 'person',
	initialState,
	reducers: {
		changeName: (state, action) => {
			state.name = action.payload.name;
		},
        changeId: (state, action) => {
            state.id = action.payload.id;
		},
        changeImage: (state, action) => {
            state.image = action.payload.image;
		},
        changeImageName: (state, action) => {
            state.imageName = action.payload.imageName;
		},
	}
});

export const { changeName, changeId, changeImage, changeImageName } = personSlice.actions;

export default personSlice.reducer;