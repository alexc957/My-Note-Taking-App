import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import {firebase} from '../firebase/index'
import "@testing-library/jest-dom/extend-expect";
import Login from '../pages/Login';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import FirebaseContext from '../context/firebase';
import { MemoryRouter } from 'react-router';

 test('should Email label exist', () => {
    const {getByTestId} = render( <FirebaseContext.Provider value={firebase}><Provider store ={store}> <MemoryRouter><Login /></MemoryRouter></Provider></FirebaseContext.Provider>)

    const emailLabel = getByTestId('email')
    expect(emailLabel.textContent).toBe("Email")

})



test('should password label exist', () => {
    const {getByTestId} =  render( <FirebaseContext.Provider value={firebase}><Provider store ={store}> <MemoryRouter><Login /></MemoryRouter></Provider></FirebaseContext.Provider>)

    const passwLabel = getByTestId('password')
    expect(passwLabel.textContent).toBe("Password")

})

test('should title exist', () => {
    const {getByTestId} =  render( <FirebaseContext.Provider value={firebase}><Provider store ={store}> <MemoryRouter><Login /></MemoryRouter></Provider></FirebaseContext.Provider>)

    const account = getByTestId('title')
    expect(account.textContent).toBe("Log In")

})
