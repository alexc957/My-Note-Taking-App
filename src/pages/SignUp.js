import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password,setPassword] = useState('')
    return (
        <> 
            <NavBar/>

            <div className="container-sm flex flex-col items-center">
                <div className="border-2 w-1/3  rounded-large m-4 shadow-lg bg-gray h-96">
                <h3 className="text-center" data-testid="title">Create an Account</h3>

                <form className="flex flex-col m-4">
                    <label htmlFor="email" data-testid="email">Email</label>
                    <input 
                        data-testid="input-mail" 
                        id="email" 
                        value={email} 
                        type="email" 
                        onChange={({target})=>setEmail(target.value)}
                        className="border-2 rounded-lg pb-2 mb-8"/>

                    <label htmlFor="username" data-testid="username">username</label>
                    <input
                        data-testid="input-username" 
                        id="username" 
                        value={username} 
                        type="text" 
                        onChange={({target})=>setUsername(target.value)}
                        className="border-2 rounded-lg pb-2  mb-8"/>

                    <label htmlFor="password" data-testid="password">Password</label>
                    <input 
                        data-testid="input-passwd"
                        id="password" 
                        value={password} 
                        type="password" 
                        onChange={({target})=>setPassword(target.value)}
                        className="border-2 rounded-lg pb-2 mb-8"/>


                    <div className="flex flex-row items-center pb-4">
                        
                    <button type="submit" className="rounded-lg w-24 h-12 bg-blue-dark text-primary mr-8" ><a href="/login" data-testid="signup-btn">Sign Up</a></button>
                    <span>Already have an Account? <p className="text-blue inline" data-testid="login">login</p></span> 
                    </div>




                </form>

                </div>

            </div>

            <Footer/>

        </>
    )
}
