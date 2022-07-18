import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    events: {},
    currentEvent: null,
    pagination: {}
}

export const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        create: (state, action) => {
            state.events = [...state.events, action.payload];
        },
        delete: (state, action) => {
        },
        retrieve: (state, action) => {
            state.events = action.payload;
        },
        setCurrentEvent: (state, action) => {
            state.currentEvent = action.payload;
        },
        setPagination: (state, action) => {
            state.pagination = action.payload;
        }
    }
});

export const { create, retrieve, setCurrentEvent, setPagination } = eventsSlice.actions;

export default eventsSlice.reducer;