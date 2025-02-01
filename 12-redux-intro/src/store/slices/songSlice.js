import { createSlice } from "@reduxjs/toolkit"

const songSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong:  (state, action) => {
            state.push(action.payload);
        },
        removeSong: (state, action) => {
            state.splice(action.payload, 1);
        }
    },
    extraReducers: (builder) => {
        builder.addCase('movie/reset', (state, action)=>{
            return [];
        })
    }
   
});
console.log(songSlice);

export const {addSong, removeSong} = songSlice.actions;
export {songSlice};