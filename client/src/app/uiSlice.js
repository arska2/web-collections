import { createSlice } from '@reduxjs/toolkit';

const initialState = { selectedCategory: undefined };

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => { state.selectedCategory = action.payload },

    }
})

export const { setSelectedCategory } = uiSlice.actions
