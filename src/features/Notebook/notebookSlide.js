import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



const initialState = {
    currentNotebook: '',
    notes: []
}



export const notebookSlice = createSlice({
    name: "notebook",
    initialState,
    reducers:{
        setNotebook: (state, action) => {

            state.currentNotebook = action.payload.currentNotebook;

        },
        
        
    },

})


export const {setNotebook}  = notebookSlice.actions;

export const selectNotes = (state) => state.notebook.notebooks; 


export default notebookSlice.reducer; 