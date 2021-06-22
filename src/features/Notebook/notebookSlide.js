import { createSlice } from '@reduxjs/toolkit';
import { act } from '@testing-library/react';



const initialState = {
    docId: '',
    notes: []
    

}



export const notebookSlice = createSlice({
    name: "notebook",
    initialState,
    reducers:{
        setNotebook: (state, action) => {
            console.log('action ? ', action);

           state.docId = action.payload;
            
         
            
        },
        setNotes: (state,action)=>{
            state.notes = action.payload;
        }

        
        
    },
   
})


export const {setNotebook,setNotes}  = notebookSlice.actions;


export const selectCurrentNoteBookId = (state) => state.notebook.docId; 
export const selectNotes = (state) => state.notebook.notes;

export default notebookSlice.reducer; 