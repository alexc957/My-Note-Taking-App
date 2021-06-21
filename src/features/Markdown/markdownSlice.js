import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    noteId: '',
    body: '',
    createAt: ''
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
        },
        setCreatedAt: (state,action) => {
            state.createAt = action.payload;
        }
    }
})


export const {setBody, setNoteId, setCreatedAt} = mardownSlice.actions;

export const selectBody = (state) => state.markdown.body;
export const selectNoteId = (state) => state.markdown.noteId;
export const selectCreatedAt = (state) => state.markdown.createAt;
export default mardownSlice.reducer;