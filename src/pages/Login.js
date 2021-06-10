import React, {useState} from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import {useSelector, useDispatch} from 'react-redux'

import {logInUser} from '../features/User/userSlice'
import { logIntoAccount } from '../firebase/services'
import { useHistory } from 'react-router'

export default function Login() {
    const [email, setEmail] = useState('')

    const history = useHistory()
 
    const [password,setPassword] = useState('')
    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const handleLogin = async (event) => {
        event.preventDefault()
        try{
            if(email && password){
                const docId = await logIntoAccount(email,password)
                dispatch(logInUser(docId))
                history.push('/notes')


            } else{
                setError("please fill the required fields")
            }
            

        }catch(e){
            setError(e.message)
        }
    }

    return (
        <> 
            <NavBar/>

            <div className="container-sm flex flex-col items-center">
                <div className="border-2 w-1/3  rounded-large m-4 shadow-lg bg-gray h-96">
                <h3 className="text-center" data-testid="title">Log In</h3>

                {error && <p className="text-sm text-error text-center">{error}</p>}

                <form className="flex flex-col m-4" onSubmit={handleLogin}>
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
