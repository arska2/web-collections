import { createSlice } from '@reduxjs/toolkit';

const initialState = { selectedCategory: {}, selectedTags: [] };

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => { state.selectedCategory = action.payload },
        setSelectedTags: (state, action) => { state.selectedTags = [...state.selectedTags, action.payload] },
        removeSelectedTag: (state, action) => { state.selectedTags = state.selectedTags.filter(tag => tag !== action.payload) }

    }
})

export const {
    setSelectedCategory,
    setSelectedTags,
    removeSelectedTag
} = uiSlice.actions
