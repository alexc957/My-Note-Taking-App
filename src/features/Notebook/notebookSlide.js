import { createSlice } from '@reduxjs/toolkit';




const initialState = {
    docId: '',
    notes: [],
    notebooks: []
    

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
        },
        setNotebooks: (state, action) =>{
            state.notebooks = action.payload;
        },
        updateNotebooks: (state, action) => {
           // console.log('state.notebooks',state.notebooks)
            //console.log('action.payload',)
            state.notebooks = state.notebooks.filter((notebook)=> notebook.id!=action.payload)
        }

        
        
    },
   
})


export const {setNotebook,setNotes, setNotebooks,updateNotebooks}  = notebookSlice.actions;


export const selectCurrentNoteBookId = (state) => state.notebook.docId; 
export const selectNotes = (state) => state.notebook.notes;
export const selectNotebooks = (state) => state.notebook.notebooks;
export default notebookSlice.reducer; 