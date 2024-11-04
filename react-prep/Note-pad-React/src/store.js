import { configureStore } from '@reduxjs/toolkit'
import { PastSlice } from './Redux/PastSlice'

export const store = configureStore({
    reducer: {
        paste: PastSlice
    },
})