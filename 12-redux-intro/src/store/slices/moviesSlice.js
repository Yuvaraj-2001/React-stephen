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
        }
    }

});

export const {addMovie, removeMovie} = moviesSlice.actions;
export {moviesSlice};