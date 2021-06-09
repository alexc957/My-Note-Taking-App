import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import "@testing-library/jest-dom/extend-expect";
import Login from '../pages/Login';
import { Provider } from 'react-redux';
import { store } from '../app/store';

test('should Email label exist', () => {
    const {getByTestId} = render(<Provider store ={store}><Login /></Provider>)

    const emailLabel = getByTestId('email')
    expect(emailLabel.textContent).toBe("Email")

})



test('should password label exist', () => {
    const {getByTestId} = render(<Provider store ={store}><Login /></Provider>)

    const passwLabel = getByTestId('password')
    expect(passwLabel.textContent).toBe("Password")

})

test('should title exist', () => {
    const {getByTestId} = render(<Provider store ={store}><Login /></Provider>)

    const account = getByTestId('title')
    expect(account.textContent).toBe("Log In")

})
