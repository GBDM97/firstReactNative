import { createSlice } from "@reduxjs/toolkit";
import { Store } from "./store";

export type users = {
	users: [
		{
			name: string,
			id: number,
			availableImages: Array<number>
		},
		{
			name: string,
			id: number,
			availableImages: Array<number>
		},
		{
			name: string,
			id: number,
			availableImages: Array<number>
		}
	],
	selectedUser: {}
};

export type IusersSlice ={
    reducer: {
		users: [],
		selectedUser: {}
	}
}

export const initialState:users = {
	users: [
		{
			name: "Ghian",
			id: 777,
			availableImages: [11, 22, 33]
		},
		{
			name: "Sonival",
			id: 888,
			availableImages: [33, 44, 55]
		},
		{
			name: "Rapha",
			id: 999,
			availableImages: [66, 77, 88]
		}
	],
	selectedUser: {}
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		changeUsersInfo: (state, action) => {
			state.users = action.payload;
		},
		changeSelectedUser: (state, action) => {
			state.selectedUser = action.payload;
		}
	}
});

export const selectUsers = (state:Store) => {return state}

export const { changeUsersInfo, changeSelectedUser } = usersSlice.actions;

export default usersSlice.reducer;