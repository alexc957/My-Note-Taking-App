import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import "@testing-library/jest-dom/extend-expect";
import SignUp from '../pages/SignUp';
import { MemoryRouter } from 'react-router';
import App from '../App';


test('should Email label exist', () => {
    const {getByTestId} = render(<SignUp />)

    const emailLabel = getByTestId('email')
    expect(emailLabel.textContent).toBe("Email")

})

test('should username label exist', () => {
    const {getByTestId} = render(<SignUp />)

    const usernameLabel = getByTestId('username')
    expect(usernameLabel.textContent).toBe("username")

})

test('should password label exist', () => {
    const {getByTestId} = render(<SignUp />)

    const passwLabel = getByTestId('password')
    expect(passwLabel.textContent).toBe("Password")

})


test('should exist label exist', () => {
    const {getByTestId} = render(<SignUp />)

    const account = getByTestId('login')
    expect(account.textContent).toBe("login")

})


test('should title exist', () => {
    const {getByTestId} = render(<SignUp />)

    const account = getByTestId('title')
    expect(account.textContent).toBe("Create an Account")

})










