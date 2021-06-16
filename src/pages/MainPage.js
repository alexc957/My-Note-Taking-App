import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import NotebookSection from '../components/notes/NotebookSection'
import NotesSection from '../components/notes/NotesSection'
import NoteEdit from '../components/notes/NoteEdit'
import Preview from '../components/notes/Preview'
export default function MainPage() {
    return (
        <>
        <NavBar/>
        <section className="flex flex-row h-full">
               <NotebookSection />
                <NotesSection />
                <div className="h-full flex-grow flex flex-row justify-center items-center">
                    <NoteEdit />
                    <Preview />

                </div>
              

        
        </section>
        <Footer/>
        </>
    )
}
