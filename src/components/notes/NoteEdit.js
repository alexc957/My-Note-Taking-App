import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {selectBody, selectNoteId, setBody} from '../../features/Markdown/markdownSlice'
import { addBodytoNote } from '../../firebase/services'
export default function NoteEdit() {

    const dispatch = useDispatch()
    const body = useSelector(selectBody)
    const noteId = useSelector(selectNoteId);
    

    console.log('noteId',noteId);
    if(!noteId){
        return <div></div>
    }

    const saveNote = async () => {
        try {
            await addBodytoNote(noteId,body)
        }catch(e){}
        

    }
    
    return (
        <div data-testid="edit" className="w-1/3 h-2/3 border-2 justify-between rounded-large bg-gray shadow-2xl flex flex-col">
            <h3 className="text-center"> Markdown</h3>
            
            <textarea value={body} className="mx-4 h-2/3 p-2" onChange={({target})=> dispatch(setBody(target.value))}>

            </textarea>

            <span className="flex flex-row justify-around mb-8">
                <button className="bg-blue-dark w-16 rounded-large text-primary" onClick={saveNote}>Save</button>
                <button className="bg-red text-primary w-16 rounded-large">Delete</button>

            </span>

            
            
        </div>
    )
}
