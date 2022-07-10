import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    events: [],
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
        }
    }
});

export const { create, retrieve } = eventsSlice.actions;

export default eventsSlice.reducer;