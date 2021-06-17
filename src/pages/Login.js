import React, {useContext, useState} from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import {useDispatch} from 'react-redux'

import {logInUser} from '../features/User/userSlice'

import { useHistory } from 'react-router'
import FirebaseContext from '../context/firebase'

export default function Login() {
    const [email, setEmail] = useState('')

    const history = useHistory()
 
    const [password,setPassword] = useState('')
    const [error, setError] = useState('')
    const firebase = useContext(FirebaseContext)
    const dispatch = useDispatch()
  

    const handleLogin = async (event) => {
        event.preventDefault()
        try{
            if(email && password){
                const {user} = await firebase.auth().signInWithEmailAndPassword(email, password)
                const userDetails = await firebase.firestore().collection('users').where('email', "==",user.email).get()
              //  console.log('what is userDetails',userDetails.docs[0].id);
               dispatch(logInUser(userDetails.docs[0].id))

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

                {error && <p className="text-sm text-error text-center" data-testid="error-message">{error}</p>}

                <form className="flex flex-col m-4" onSubmit={handleLogin}>
                    <label htmlFor="email" data-testid="email">Email</label>
                    <input  
                        id="email" 
                        value={email} 
                        type="email" 
                        onChange={({target})=>setEmail(target.value)}
                        className="border-2 rounded-lg pb-2 mb-8"
                        data-testid="input-mail"/>

                  

                    <label htmlFor="password" data-testid="password">Password</label>
                    <input 
                        id="password" 
                        value={password} 
                        type="password" 
                        onChange={({target})=>setPassword(target.value)}
                        className="border-2 rounded-lg pb-2 mb-8"
                        data-testid="input-password"/>


                    <div className="flex flex-row items-center pb-4">
                        
                    <button type="submit" className="rounded-lg w-24 h-12 bg-blue-dark text-primary mr-8" data-testid="submit">Sign Up</button>
                   
                    </div>




                </form>

                </div>

            </div>

            <Footer/>

        </>
    )
}
