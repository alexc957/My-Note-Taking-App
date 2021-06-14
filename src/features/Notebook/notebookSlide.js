import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {firebase} from '../../firebase/index'


const initialState = {
    currentNotebook: '',
    notes: []
}

const fetchByNotebookDocId = createAsyncThunk(
    'notebook/fetchByNotebookDocId',
    async (docId, thunkApi)=>{
        const response = await firebase.firestore().collection("notebooks").doc(docId).get()
        return response.data().notes 
    }
)

export const notebookSlice = createSlice({
    name: "notebook",
    initialState,
    reducers:{
        setNotebook: (state, action) => {

            state.currentNotebook = action.payload.currentNotebook;

        },
        
        
    },
    extraReducers: {
        [fetchByNotebookDocId.fulfilled]: (state, action) =>{
            state.notes = action.payload
        }
    }
})


export const {setNotebook}  = notebookSlice.actions;

export const selectNotes = (state) => state.notebook.notebooks; 
export const 

export default notebookSlice.reducer; 