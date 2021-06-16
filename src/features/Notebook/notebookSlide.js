import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    docId: '',
    

}



export const notebookSlice = createSlice({
    name: "notebook",
    initialState,
    reducers:{
        setNotebook: (state, action) => {
            console.log('action ? ', action);

           state.docId = action.payload;
            
         
            
        },
        
        
    },
   
})


export const {setNotebook}  = notebookSlice.actions;


export const selectCurrentNoteBookId = (state) => state.notebook.docId; 


export default notebookSlice.reducer; 