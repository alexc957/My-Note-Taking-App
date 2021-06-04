import React, { useEffect } from 'react'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Plans from '../components/Plans'


export default function LandinPage() {
    useEffect(()=>{
        document.title = "Landing Page"
    },[])
    return (
        <div className="h-screen">
          <NavBar />
                  
           {/*   header goes here */ }
           <Header/> 

           {/* feature section goes here  */}
           <Features />
        
           {/* plans should go here*/ }
           <p className="text-center mt-4" data-testid="plans">Plans</p>
           <Plans /> 

           <Footer/>
        </div>
    )
}
