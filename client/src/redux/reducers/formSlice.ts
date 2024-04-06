import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        isFormOpen: false,
        isPostFormOpen: false,
    },
    reducers: {
        openForm: (state) => {
            state.isFormOpen = true;
        },
        closeForm: (state) => {
            state.isFormOpen = false;
        },
        openPostForm: (state) => {
            state.isPostFormOpen = true;
        },
        closePostForm: (state) => {
            state.isPostFormOpen = false;
        },
    },
});

export const { openForm, closeForm, openPostForm, closePostForm } = formSlice.actions;
export default formSlice.reducer;
