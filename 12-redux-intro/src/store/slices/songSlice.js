import { createSlice } from "@reduxjs/toolkit"
import { reset } from "../action";
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
        builder.addCase(reset, (state, action)=>{
            return [];
        })
    }
   
});
console.log(songSlice);

export const {addSong, removeSong} = songSlice.actions;
export {songSlice};