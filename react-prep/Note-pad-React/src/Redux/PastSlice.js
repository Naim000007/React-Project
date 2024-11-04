// PastSlice.js
import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
    pastes: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem("pastes")) : []
}

const PastSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        addTopPastes: (state, action) => {
            const paste = action.payload;
            state.pastes.push(paste);
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast.success('Paste added successfully!');
        },
        updateToPaste: (state, action) => {
            const updatedPaste = action.payload;
            const index = state.pastes.findIndex(paste => paste._id === updatedPaste._id);
            if (index !== -1) {
                state.pastes[index] = updatedPaste;
                localStorage.setItem("pastes", JSON.stringify(state.pastes));
                toast.success('Paste updated successfully!');
            }
        },
        resetAllpastes: (state) => {
            state.pastes = [];
            localStorage.removeItem("pastes");
            toast.success('All pastes have been reset!');
        },
        removeFromPastes: (state, action) => {
            const pasteId = action.payload;
            state.pastes = state.pastes.filter(paste => paste._id !== pasteId);
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast.success('Paste removed successfully!');
        }
    },
})

// Export the actions and reducer
export const { addTopPastes, updateToPaste, resetAllpastes, removeFromPastes } = PastSlice.actions
export default PastSlice.reducer  // This exports only the reducer
