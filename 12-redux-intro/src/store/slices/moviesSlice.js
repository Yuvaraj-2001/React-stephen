import {createSlice} from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie: (state, action) => {
            state.push(action.payload);
        },
        removeMovie: (state, action) => {
            state.splice(action.payload, 1);
        },
        reset: (state) => {
            state.splice(0, state.length);
        //    return [];
        }
    }

});

export const {addMovie, removeMovie, reset} = moviesSlice.actions;
export {moviesSlice};