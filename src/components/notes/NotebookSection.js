import React, { useState } from 'react'

const InputElement = ({disabled, title}) => {

    return (<input className="bg-white" value={title} disabled={disabled} />)
}

export default function NotebookSection() {
    const [notebooks, setNotebooks] = useState([ {title: "title "}, {title: "s"}])
    const [newNotebook, setNewNotebook] = useState(false)
    const [title, setTitle] = useState('')
    const [editIndex, setEditIndex] = useState(-1)

    const handleKeyEnter = (event) => {
        if(event.key === 'Enter'){

            if(editIndex===-1){
                setNewNotebook(!newNotebook)
                setNotebooks([...notebooks, {title: title}])
                setTitle('')
              

            }else {
                setNotebooks([...notebooks.map((notebook,index)=> {
                    if(index===editIndex){
                        notebook.title = title 
                        return notebook 
    
                    }
                    return notebook
                })])
           
                setEditIndex(-1)
                setTitle('')

            }


         
        }
    }

    const handleClick = (event,index) => {
        if(event.detail===1){
            console.log("change the notes value");
        } else if(event.detail===2){
            setEditIndex(index)
            setTitle(notebooks[index].title)

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
            {notebooks.map((notebook,index) => editIndex!==index? <button onClick={(event)=>handleClick(event,index)} className="border-b-2 block w-full" key={index}>{notebook.title}</button> :
               <input key={index} className="border-b-2 block w-full"  value={title} onChange={({target})=> setTitle(target.value)} onKeyPress={handleKeyEnter}  autoFocus/> )}

            {newNotebook && <input value={title} onChange={({target})=> setTitle(target.value)} onKeyPress={handleKeyEnter}  autoFocus/>}
        </div>
    )
}
