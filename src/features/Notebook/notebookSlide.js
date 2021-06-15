import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



const initialState = {
    docId: '',
    

}

/*export const fetchNotesByNoteBookId = createAsyncThunk(
    'notebook/fetchNotesByNoteBookId',
    async (notebookId,thunkAPI) => {
        const response = await firebase.firestore().collection("notes").where("notebookId",'==',notebookId).get()
        const data = response.docs.map((note)=>({id: note.id, ...note.data()}))
        return data 
    }
)
*/

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