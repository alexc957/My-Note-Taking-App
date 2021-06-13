import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import {firebase} from '../firebase/index'
import "@testing-library/jest-dom/extend-expect";
import MainPage from '../pages/MainPage';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import FirebaseContext from '../context/firebase';
import { MemoryRouter } from 'react-router';


test('should exit a notebook section', () => {
    const {getByTestId} = render(<FirebaseContext.Provider value={firebase}>
            <Provider store={store}>
                <MemoryRouter>
                    <MainPage />
                </MemoryRouter>
            </Provider>
    </FirebaseContext.Provider> )  
    const notebookEl = getByTestId('notebook')
    expect(notebookEl).toBeInTheDocument()
})


test('should exist notes section', () => {
    const {getByTestId} = render(<FirebaseContext.Provider value={firebase}>
            <Provider store={store}>
                <MemoryRouter>
                    <MainPage />
                </MemoryRouter>
            </Provider>
    </FirebaseContext.Provider> )  
    const notebookEl = getByTestId('notes')
    expect(notebookEl).toBeInTheDocument()
})

test('should exist edit section', () => {
    const {getByTestId} = render(<FirebaseContext.Provider value={firebase}>
            <Provider store={store}>
                <MemoryRouter>
                    <MainPage />
                </MemoryRouter>
            </Provider>
    </FirebaseContext.Provider> )  
    const notebookEl = getByTestId('edit')
    expect(notebookEl).toBeInTheDocument()
})

test('should exist preview section', () => {
    const {getByTestId} = render(<FirebaseContext.Provider value={firebase}>
            <Provider store={store}>
                <MemoryRouter>
                    <MainPage />
                </MemoryRouter>
            </Provider>
    </FirebaseContext.Provider> )  
    const notebookEl = getByTestId('preview')
    expect(notebookEl).toBeInTheDocument()
})
