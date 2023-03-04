import { configureStore } from '@reduxjs/toolkit'
import { IusersSlice, users, usersSlice } from './usersSlice'
import {IimagesSlice, images, imagesSlice} from './imagesSlice'

export type Store = {
    usersReducer: users,
    imagesReducer: images,
}

export const store = configureStore({
  reducer: {
    usersReducer: usersSlice.reducer,
    imagesReducer: imagesSlice.reducer,
    }
})