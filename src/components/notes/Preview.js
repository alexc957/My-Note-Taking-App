import React from 'react'
import { useSelector } from 'react-redux'
import { selectBody, selectCreatedAt, selectNoteId } from '../../features/Markdown/markdownSlice'
import ReactMarkdown from 'react-markdown'
export default function Preview() {
    const body = useSelector(selectBody)
    const createAt = useSelector(selectCreatedAt)
    const noteId = useSelector(selectNoteId);
    if(!noteId){
        return <div></div>
    }
    return (
        
        
        <div data-testid="preview" className="w-1/3 h-2/3 border-2 ml-4 rounded-large p-8 bg-gray shadow-2xl overflow-y-auto overflow-x-auto "> 
            {createAt && <p className="text-sm" data-testid="saved-at">{createAt}</p>} 
                
            <ReactMarkdown>{body}</ReactMarkdown>
        </div>
        
    )
}
