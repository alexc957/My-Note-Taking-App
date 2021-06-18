import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    userEmail: ''
}

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers:{
        logInUser: (state,action)=>{
            state.userEmail = action.payload

       },
       logOutUser: (state)=>{
           state.userEmail = '' 
       }
    }
})


export const {logInUser, logOutUser} = userSlide.actions

export const selectUserEmail = (state) => state.user.userEmail;


export default userSlide.reducer;