import { firebase, FieldValue} from "./index";

export async function createNotebooksByUserId (userDocId,notebookTitle ){

  

    const notebook = await firebase.firestore().collection('notebooks').add({
        title: notebookTitle,
        createdBy: userDocId,
        notes: []
    })

    

    
} 

export async function editTitle(docId,newTitle) {

    await firebase.firestore().collection('notebooks').doc(docId).update({
        title: newTitle
    })
    
}