import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    docId: ''
}

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers:{
        logInUser: (state,action)=>{
            state.docId = action.payload

       },
       logOutUser: (state)=>{
           state.docId = '' 
       }
    }
})


export const {logInUser, logOutUser} = userSlide.actions

export const selectDocId = (state) => state.user.docId;


export default userSlide.reducer;