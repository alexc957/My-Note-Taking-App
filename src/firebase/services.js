
import {firebase} from './index';



export async function createAccount(email,password, username){
        
    
        const user = await firebase.auth().createUserWithEmailAndPassword(email,password)
        await addUserToFirestore(email, username)
        return user.user
}


export async function addUserToFirestore(email, username){
    const user = await firebase.firestore().collection('users').add({
        email,
        username
    })

}


export async function logIntoAccount(email, password){
    const {user} = await firebase.auth().signInWithEmailAndPassword(email, password)
    const userDetails = await firebase.firestore().collection('users').where('email', "==",user.email).get()
    return userDetails.docs[0].id
}




