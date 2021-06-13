import React from 'react'

export default function NotesSection() {
    return (
        <div className="w-56 border-r-2 p-0 h-full" data-testid="notes">
            <div className="border-b-2 p-0 m-0 w-full">
                    <button className="flex flex-row h-16 items-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <p> New Note </p>

                    </button>
                    
                    
            </div>

        </div>
    )
}
