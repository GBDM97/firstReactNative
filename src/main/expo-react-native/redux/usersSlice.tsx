import { createSlice } from "@reduxjs/toolkit";
import { Store } from "./store";

export type users = {
	users: [
		{
			name: string,
			id: number
		},
		{
			name: string,
			id: number
		},
		{
			name: string,
			id: number
		}
	],
	selectedUser: {
		name: string,
		id: number,
		availableImages: Array<number>
	}
};

export type IusersSlice ={
    reducer: {
		users: [],
		selectedUser: {
			name: string,
			id: number,
			availableImages: Array<number>
		}
	}
}

export const initialState:users = {
	users: [
		{
			name: "Ghian",
			id: 777
		},
		{
			name: "Sonival",
			id: 888
		},
		{
			name: "Rapha",
			id: 999
		}
	],
	selectedUser: {
		name: "",
		id: 0,
		availableImages: []
	}
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