import { fireEvent, getAllByTestId, render, screen } from '@testing-library/react';
import React from 'react';

import "@testing-library/jest-dom/extend-expect";
import SignUp from '../pages/SignUp';
import { MemoryRouter } from 'react-router';
import App from '../App';
import { act } from 'react-dom/test-utils';


test('should Email label exist', () => {
    const {getByTestId} = render(<MemoryRouter> <SignUp /></MemoryRouter>)

    const emailLabel = getByTestId('email')
    expect(emailLabel.textContent).toBe("Email")

})

test('should username label exist', () => {
    const {getByTestId} = render(<MemoryRouter > <SignUp /></MemoryRouter>)

    const usernameLabel = getByTestId('username')
    expect(usernameLabel.textContent).toBe("username")

})

test('should password label exist', () => {
    const {getByTestId} = render(<MemoryRouter> <SignUp /></MemoryRouter>)

    const passwLabel = getByTestId('password')
    expect(passwLabel.textContent).toBe("Password")

})


test('should exist label exist', () => {
    const {getByTestId} = render(<MemoryRouter> <SignUp /></MemoryRouter>)

    const account = getByTestId('login')
    expect(account.textContent).toBe("login")

})


test('should title exist', () => {
    const {getByTestId} = render(<MemoryRouter> <SignUp /></MemoryRouter>)

    const account = getByTestId('title')
    expect(account.textContent).toBe("Create an Account")

})


test('should input in the form fields', () => {

    const {getByTestId} = render(<MemoryRouter initialEntries={["/signup"]}><App/></MemoryRouter>)
    fireEvent.click(getByTestId('button-Free'))
    
    
 
    const usernameInput = screen.getByTestId('input-username')
    const emailInput = screen.getByTestId('input-mail')
    const passwdInput = screen.getByTestId('input-passwd')

    fireEvent.change(usernameInput,{target: {value: 'test'}})
    fireEvent.change(emailInput,{target: {value: 'test@mail.com'}})
    fireEvent.change(passwdInput,{target: {value: 'test64878'}})

    //fireEvent.click(buttonEl)

    expect(usernameInput.value).toBe('test')
    expect(emailInput.value).toBe('test@mail.com')
    expect(passwdInput.value).toBe('test64878')

    
})











