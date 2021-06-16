import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    noteId: '',
    body: ''
}

export const mardownSlice = createSlice({
    name: 'markdown',
    initialState,
    reducers: {
        setBody: (state, action) =>{
            state.body = action.payload; 
        },
        setNoteId: (state,action)=> {
            state.noteId = action.payload;
        }
    }
})


export const {setBody, setNoteId} = mardownSlice.actions;

export const selectBody = (state) => state.markdown.body;
export const selectNoteId = (state) => state.markdown.noteId;
export default mardownSlice.reducer;