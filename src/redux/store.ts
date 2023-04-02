import { configureStore } from '@reduxjs/toolkit'
import chartReducer from './chartSlice'


export const store = configureStore({
  reducer: chartReducer,
})

