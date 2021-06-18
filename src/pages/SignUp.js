import React, { useContext, useState } from 'react'
import {  useHistory } from 'react-router-dom'
import Footer from '../components/Footer'

import NavBar from '../components/NavBar'
import FirebaseContext from '../context/firebase'


export default function SignUp() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState('')
    let history = useHistory()

    const firebase = useContext(FirebaseContext);

 


    const submitForm = async (event)=> {
        event.preventDefault()
    
        if(username!=='' && email!=='' && password!==''){
            try{
               
                await firebase.auth().createUserWithEmailAndPassword(email, password)
           
               /* await firebase.firestore().collection('users').add({
                    email: email, username: username, notebooks: []
                })*/
                
                console.log('something');
            

           
                setError("")
                history.push("/login")
             }catch(e){
                 console.log(e.message);
                 setError(e.message)
             }    


        }else{
            setError("Fill the require fields")
        }
      
    }
    return (
        <> 
            <NavBar/>

            <div className="container-sm flex flex-col items-center">
                <div className="border-2 w-1/3 rounded-large m-4 shadow-lg bg-gray h-96">
                <h3 className="text-center" data-testid="title">Create an Account</h3>
            {error && <p className="text-sm text-error text-center" data-testid="error-message">{error}</p>}
                <form className="flex flex-col m-4" onSubmit={submitForm} data-testid='sumbit-form'>
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
                        
                    <button type="submit" className="rounded-lg w-24 h-12 bg-blue-dark text-primary mr-8" data-testid="submit-btn">Sign Up</button>
                    <span className="text-sm">Already have an Account? <p className="text-blue inline" data-testid="login">login</p></span> 
                    </div>




                </form>

                </div>

            </div>

            <Footer/>

        </>
    )
}
