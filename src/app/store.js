import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/User/userSlice';
import notebookReducer from '../features/Notebook/notebookSlide'
import markdownReducer from '../features/Markdown/markdownSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    notebook: notebookReducer,
    markdown: markdownReducer
  },
});
