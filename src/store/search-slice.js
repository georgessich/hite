import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState: {
        searchQuery: ""
    },
    reducers: {
        searchQueryHandler(state, action){
            state.searchQuery = action.payload
        }
    }
})


export const searchActions = searchSlice.actions;
export default searchSlice;