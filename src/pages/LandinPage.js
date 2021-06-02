import React from 'react'
import Features from '../components/Features'
import Header from '../components/Header'


export default function LandinPage() {
    return (
        <div className="h-screen">
                  
                  
           {/*   header goes here */ }
           <Header/> 

           {/* feature section goes here  */}
           <Features />
        </div>
    )
}
