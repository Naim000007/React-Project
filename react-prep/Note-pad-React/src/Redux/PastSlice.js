import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pastes: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem("pastes")) : []
}

export const PastSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        addTopPastes: (state, action) => {

        },
        updateToPaste: (state, action) => {

        },
        resetAllpastes: (state, action) => {

        },
        removeFromPastes: (state, action) => {

        }
    },
})

// Action creators are generated for each case reducer function
export const { addTopPastes, updateToPaste, resetAllpastes, removeFromPastes } = PastSlice.actions

export default PastSlice.reducer