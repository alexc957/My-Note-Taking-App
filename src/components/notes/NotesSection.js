import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FirebaseContext from '../../context/firebase'
import { selectNoteId, setNoteId } from '../../features/Markdown/markdownSlice'
import {selectCurrentNoteBookId} from '../../features/Notebook/notebookSlide'
import { createNoteByNotebookId } from '../../firebase/services'
export default function NotesSection() {
    const currentNotebookId = useSelector(selectCurrentNoteBookId)

    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState(false)
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const noteId = useSelector(selectNoteId)
    
    
    const firebase = useContext(FirebaseContext);

    
    useEffect(()=>{
        const getNotes = async () => {
            try{
                const response = await firebase.firestore().collection('notes').where('notebookId','==',currentNotebookId).get()
                setNotes(response.docs.map((item)=>({id: item.id,...item.data()})))

            }catch(e){

            }
        }

        if(currentNotebookId){
            getNotes()
            
        }
    }, [currentNotebookId])

    if(!currentNotebookId){
        return <div></div>
    }


    const handleKeyEnter = async (event) => {
        if(event.key === 'Enter'){
            try{
                const currentId = await createNoteByNotebookId(currentNotebookId,title,'');
                setNotes([...notes, {id: currentId, title: title}])
                
                setTitle('')
                setNewNote(false)
                dispatch(setNoteId(currentId))

            }catch(e){}
        
            
        }

    }

    const handleClick = (event,index) => {
        console.log(index);
        const selectedNote = notes[index]
        console.log('whats is the selected note', selectedNote.id);

            dispatch(setNoteId(selectedNote.id))
        
    
    
    }
   




    return (
        <div className="w-56 border-r-2 p-0 h-full" data-testid="notes">
            <div className="border-b-2 p-0 m-0 w-full">
                    <button className="flex flex-row h-16 items-center" onClick={()=>setNewNote(!newNote)} data-testid="new-note"> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <p> New Note </p>
                

                    </button>
                    
                    
            </div>
            {notes.map((note,index) =>  <button onClick={(event)=>handleClick(event,index)} data-cy="notes" className="border-b-2 block w-full hover:bg-gray" data-testid={`note-${note.title.replace(/ /g,'-')}`} key={index}>{note.title}</button> )}

            {newNote && <input data-testid="input-note" value={title} onChange={({target})=> setTitle(target.value)} onKeyPress={handleKeyEnter}  autoFocus/>}

        </div>
    )
}
