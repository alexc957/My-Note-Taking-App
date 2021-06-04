import React from 'react'

export default function Header() {
    return (
        <header>
             <img src={`${process.env.PUBLIC_URL}/images/headerNotes.png`}  className="h-100% w-full" alt="taking notes" />
            <h2 className="mt-12 font-serif text-center" data-testid="header">A Simple Way to take care of your notes</h2>
            
        </header>
    )
}
