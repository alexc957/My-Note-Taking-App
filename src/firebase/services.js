
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




