import React from 'react'
import { useSelector } from 'react-redux'
import { selectBody } from '../../features/Markdown/markdownSlice'
import ReactMarkdown from 'react-markdown'
export default function Preview() {
    const body = useSelector(selectBody)
    return (
        <div data-testid="preview" className="w-1/3 h-2/3 border-2 ml-4 rounded-large p-8 bg-gray shadow-2xl"> 
            
            <ReactMarkdown>{body}</ReactMarkdown>
        </div>
    )
}
