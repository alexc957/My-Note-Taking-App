import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    notebooks: []
}

export const notebookSlice = createSlice({
    name: "notebook",
    initialState,
    reducers:{
        setNotebooks: (state, action) => {
            state.notebooks = action.payload;
        }
    }
})


export const {setNotebooks}  = notebookSlice.actions;

export const selectNotebooks = (state) => state.notebook.notebooks; 

export default notebookSlice.reducer; 