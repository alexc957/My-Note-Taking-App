import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FirebaseContext from '../../context/firebase'
import { selectDocId } from '../../features/User/userSlice'
import {createNotebooksByUserId, editTitle} from '../../firebase/services'


export default function NotebookSection() {
    const [notebooks, setNotebooks] = useState([])
    const [newNotebook, setNewNotebook] = useState(false)
    const [title, setTitle] = useState('')
    const [editIndex, setEditIndex] = useState(-1)
    const userDocId = useSelector(selectDocId);
    const firebase = useContext(FirebaseContext);

    useEffect(()=> {
        const getNotebooksByUserId = async () => {    
            try {
                const getNotebooks = await firebase.firestore().collection("notebooks").where("createdBy",'==',userDocId).get()
           
                setNotebooks(getNotebooks.docs.map((e)=>({id: e.id,...e.data()})))
                setNewNotebook(false)

            } catch(e){
                console.log(e);
                setNotebooks([])

            }

        }
        getNotebooksByUserId()
    }, [])

    const handleKeyEnter = async (event) => {
        if(event.key === 'Enter'){

            if(editIndex===-1){
                try{
                    const newNotebookDoc = await createNotebooksByUserId(userDocId, title)
                    setNotebooks([...notebooks, {id:newNotebookDoc, title: title}])
                    setTitle('')

                }catch(e){

                }
              

            }else {
                setNewNotebook(false)
                 
                
                try{
                    setNotebooks([...notebooks.map((notebook,index)=> {
                        if(index===editIndex){
                            notebook.title = title 
                            return notebook 
        
                        }
                        return notebook
                    })])
                    await editTitle(notebooks[editIndex].id,title)
                    setEditIndex(-1)
                    setTitle('')

                }catch(e){

                }
           
               

            }         
        }
    }

    const handleClick = (event,index) => {
        if(event.detail===1){
            console.log("change the notes value");
        } else if(event.detail===2){
            setEditIndex(index)
            setTitle(notebooks[index].title)
            setNewNotebook(false)

        }
    }

    return (
        <div className="w-56 border-r-2 p-0  h-full" data-testid="notebook">
            <div className="border-b-2 p-0 m-0 w-full">
                    <button className="flex flex-row h-16 items-center" onClick={()=> setNewNotebook(!newNotebook)}> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <p> New Notebook </p>

                    </button>
                  
                    
                    
            </div>
            {notebooks.map((notebook,index) => editIndex!==index? <button onClick={(event)=>handleClick(event,index)} className="border-b-2 block w-full hover:bg-gray" key={index}>{notebook.title}</button> :
               <input key={index} className="border-b-2 block w-full"  value={title} onChange={({target})=> setTitle(target.value)} onKeyPress={handleKeyEnter}  autoFocus/> )}

            {newNotebook && <input value={title} onChange={({target})=> setTitle(target.value)} onKeyPress={handleKeyEnter}  autoFocus/>}
        </div>
    )
}