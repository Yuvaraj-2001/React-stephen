import {createSlice} from '@reduxjs/toolkit';
import { reset } from '../action';

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
    },
    extraReducers(builder){
        builder.addCase(reset, (state, action)=>{
            return [];
        })
    }

});

export const {addMovie, removeMovie} = moviesSlice.actions;
export {moviesSlice};