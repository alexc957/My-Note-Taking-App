import React, {useState} from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function Login() {
    const [email, setEmail] = useState('')
 
    const [password,setPassword] = useState('')
    return (
        <> 
            <NavBar/>

            <div className="container-sm flex flex-col items-center">
                <div className="border-2 w-1/3  rounded-large m-4 shadow-lg bg-gray h-96">
                <h3 className="text-center" data-testid="title">Log In</h3>

                <form className="flex flex-col m-4">
                    <label htmlFor="email" data-testid="email">Email</label>
                    <input  
                        id="email" 
                        value={email} 
                        type="email" 
                        onChange={({target})=>setEmail(target.value)}
                        className="border-2 rounded-lg pb-2 mb-8"/>

                  

                    <label htmlFor="password" data-testid="password">Password</label>
                    <input 
                        id="password" 
                        value={password} 
                        type="password" 
                        onChange={({target})=>setPassword(target.value)}
                        className="border-2 rounded-lg pb-2 mb-8"/>


                    <div className="flex flex-row items-center pb-4">
                        
                    <button type="submit" className="rounded-lg w-24 h-12 bg-blue-dark text-primary mr-8">Sign Up</button>
                   
                    </div>




                </form>

                </div>

            </div>

            <Footer/>

        </>
    )
}
