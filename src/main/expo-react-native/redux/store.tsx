import { configureStore } from '@reduxjs/toolkit'
import { personSlice } from './slices'

export const store = configureStore({
  reducer: personSlice.reducer
})