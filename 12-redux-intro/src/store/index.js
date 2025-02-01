import {configureStore} from '@reduxjs/toolkit';

import { songSlice } from './slices/songSlice';
import { addSong,  removeSong } from './slices/songSlice';

// movies slice
import { moviesSlice, addMovie, removeMovie, reset} from './slices/moviesSlice';

const store = configureStore({
    reducer:{
        songs: songSlice.reducer,
        movies: moviesSlice.reducer
    }
});


export {store, addSong, removeSong, addMovie, reset, removeMovie}
