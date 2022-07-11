import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    events: {},
    currentEvent: null
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
        }
    }
});

export const { create, retrieve, setCurrentEvent } = eventsSlice.actions;

export default eventsSlice.reducer;