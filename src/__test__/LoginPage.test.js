import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import "@testing-library/jest-dom/extend-expect";
import Login from '../pages/Login';

test('should Email label exist', () => {
    const {getByTestId} = render(<Login />)

    const emailLabel = getByTestId('email')
    expect(emailLabel.textContent).toBe("Email")

})



test('should password label exist', () => {
    const {getByTestId} = render(<Login />)

    const passwLabel = getByTestId('password')
    expect(passwLabel.textContent).toBe("Password")

})

test('should title exist', () => {
    const {getByTestId} = render(<Login />)

    const account = getByTestId('title')
    expect(account.textContent).toBe("Log In")

})
