import { createSlice } from '@reduxjs/toolkit';

const initialState = { selectedCategories: [], selectedTags: [] };

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        addSelectedCategory: (state, action) => { state.selectedCategories = [...state.selectedCategories, action.payload] },
        removeSelectedCategory: (state, action) => { state.selectedCategories = state.selectedCategories.filter(category => category !== action.payload) },
        addSelectedTag: (state, action) => { state.selectedTags = [...state.selectedTags, action.payload] },
        removeSelectedTag: (state, action) => { state.selectedTags = state.selectedTags.filter(tag => tag !== action.payload) }
    }
})

export const {
    addSelectedCategory,
    removeSelectedCategory,
    addSelectedTag,
    removeSelectedTag
} = uiSlice.actions
