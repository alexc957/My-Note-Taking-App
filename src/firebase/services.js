
import {firebase} from './index';



export async function createAccount(email,password, username){
        
    
        const user = await firebase.auth().createUserWithEmailAndPassword(email,password)
        const userCreated = await addUserToFirestore(email, username)
        return userCreated
}


export async function addUserToFirestore(email, username){
    const user = await firebase.firestore().collection('users').add({
        email,
        username
    })
    return user

}


export async function logIntoAccount(email, password){
    const {user} = await firebase.auth().signInWithEmailAndPassword(email, password)
    const userDetails = await firebase.firestore().collection('users').where('email', "==",user.email).get()
    return userDetails.docs[0].id
}




