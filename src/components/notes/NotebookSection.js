import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FirebaseContext from '../../context/firebase'
import { selectUserEmail } from '../../features/User/userSlice'
import {createNotebooksByUserId, editTitle} from '../../firebase/services'
import {selectCurrentNoteBookId, selectNotebooks, setNotebook, setNotebooks, setNotes} from '../../features/Notebook/notebookSlide'
import { setNoteId } from '../../features/Markdown/markdownSlice'
 

export default function NotebookSection() {
    //const [notebooks, setNotebooks] = useState([])
    const [newNotebook, setNewNotebook] = useState(false)
    const [title, setTitle] = useState('')
    const [editIndex, setEditIndex] = useState(-1)
    const currentMail = useSelector(selectUserEmail);
    const firebase = useContext(FirebaseContext);
    const distpatch = useDispatch()
   // const currentNotebookId = useSelector(selectCurrentNoteBookId)

    const notebooks = useSelector(selectNotebooks);


    useEffect(()=> {
        const getNotebooksByUserId = async () => {    
            try {
                const getNotebooks = await firebase.firestore().collection("notebooks").where("createdBy",'==',currentMail).get()
           
                distpatch(setNotebooks(getNotebooks.docs.map((e)=>({id: e.id,...e.data()}))))
               // setNewNotebook(false)

            } catch(e){
             
                setNotebooks([])

            }

        }
        getNotebooksByUserId()
    }, [])

    const handleKeyEnter = async (event) => {
        if(event.key === 'Enter'){

            if(editIndex===-1){
                try{
                    const newNotebookDoc = await createNotebooksByUserId(currentMail, title)
                    distpatch(setNotebooks([...notebooks, {id:newNotebookDoc.id, title: title}]))
                    setTitle('')
                    setNewNotebook(false)

                }catch(e){

                }
              

            }else {
                setNewNotebook(false)
                 
                
                try{
                   distpatch(setNotebooks([...notebooks.map((notebook,index)=> {
                        if(index===editIndex){
                            notebook.title = title 
                            return notebook 
        
                        }
                        return notebook
                    })]))
                    await editTitle(notebooks[editIndex].id,title)
                    setEditIndex(-1)
                    setTitle('')

                }catch(e){

                }
           
               

            }         
        }
    }

    const handleClick = async (event,index) => {
        if(event.detail===1){
            //console.log('current ntoebook',currentNotebookId);
            //console.log('current',notebooks[index].id);
           distpatch(setNotebook(notebooks[index].id))
            const response = await firebase.firestore().collection('notes').where('notebookId','==',notebooks[index].id).get()
            distpatch(setNotes(response.docs.map((item)=>({id: item.id,...item.data()}))))
            distpatch(setNoteId(''))
         
       
        } else if(event.detail===2){
            setEditIndex(index)
            setTitle(notebooks[index].title)
            setNewNotebook(false)

        }
    }

    return (
        <div className="w-56 border-r-2 p-0  h-full" data-testid="notebook">
            <div className="border-b-2 p-0 m-0 w-full">
                    <button className="flex flex-row h-16 items-center" onClick={()=> setNewNotebook(!newNotebook)} data-testid="new-notebook"> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <p> New Notebook </p>

                    </button>
                  
                    
                    
            </div>
            {notebooks.map((notebook,index) => editIndex!==index? <button onClick={(event)=>handleClick(event,index)}  data-cy="notebook" className="border-b-2 block w-full hover:bg-gray" data-testid={`nb-${notebook.title.replace(/ /g,'-')}`} data-cy="notebook" key={index}>{notebook.title}</button> :
               <input key={index} className="border-b-2 block w-full" data-testid="input-edit" value={title} onChange={({target})=> setTitle(target.value)} onKeyPress={handleKeyEnter}  autoFocus/> )}

            {newNotebook && <input value={title} onChange={({target})=> setTitle(target.value)} onKeyPress={handleKeyEnter} data-testid="input-notebook"  autoFocus/>}
        </div>
    )
}
