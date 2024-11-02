import { configureStore, createSlice } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

//steps
// create store
// wreap app component under Provider
// create createSlice
// register reducer in store