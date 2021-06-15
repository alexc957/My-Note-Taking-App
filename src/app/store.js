import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/User/userSlice';
import notebookReducer from '../features/Notebook/notebookSlide'

export const store = configureStore({
  reducer: {
    user: userReducer,
    notebook: notebookReducer 
  },
});
