import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FirebaseContext from '../../context/firebase'
import {selectBody, selectNoteId, setBody, setCreatedAt, setNoteId} from '../../features/Markdown/markdownSlice'
import { selectCurrentNoteBookId, setNotes } from '../../features/Notebook/notebookSlide'
import { addBodytoNote, deleteNoteById } from '../../firebase/services'
export default function NoteEdit() {
    const firebase = useContext(FirebaseContext)
    const dispatch = useDispatch()
    const body = useSelector(selectBody)
    const noteId = useSelector(selectNoteId);
    const currentNotebookId = useSelector(selectCurrentNoteBookId)

    console.log('noteId',noteId);
    if(!noteId){
        return <div></div>
    }

    const saveNote = async () => {
        try {
            await addBodytoNote(noteId,body)
            dispatch(setCreatedAt((new Date()).toDateString()))
        }catch(e){}
        

    }

    const deleteNote =async ()=>{
        try{
            await deleteNoteById(noteId)
            dispatch(setNoteId(''))
            const response = await firebase.firestore().collection('notes').where('notebookId','==',currentNotebookId).get()
            dispatch(setNotes(response.docs.map((item)=>({id: item.id,...item.data()}))))
        }catch(e){}
    }
    
    return (
        <div data-testid="edit" className="w-2/5 h-4/5 border-2 justify-between rounded-large bg-gray shadow-2xl flex flex-col">
            <h3 className="text-center"> Markdown</h3>
            
            <textarea value={body} data-testid="input-markdown" className="mx-4 h-2/3 p-2" onChange={({target})=> dispatch(setBody(target.value))}>

            </textarea>

            <span className="flex flex-row justify-around mb-8">
                <button className="bg-blue-dark w-16 rounded-large text-primary" data-testid="save-note" onClick={saveNote}>Save</button>
                <button className="bg-red text-primary w-16 rounded-large" data-testid="delete-note" onClick={deleteNote}>Delete</button>

            </span>

            
            
        </div>
    )
}
