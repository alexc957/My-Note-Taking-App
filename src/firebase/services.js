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

export async function createNoteByNotebookId(notebookId, title, body) {
    const response = await firebase.firestore().collection("notes").add({
        notebookId,
        title, 
        body       
    })
    return response.id;   
}


export async function addBodytoNote(noteId, body) {

    await firebase.firestore().collection('notes').doc(noteId).update({
        body: body,
    })
    
}

