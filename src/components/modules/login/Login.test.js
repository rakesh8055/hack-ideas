import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import Login from './Login';
import { expect } from '@jest/globals';
import { Provider } from 'react-redux'; 
import store from '../../../redux/store';

test('verify if modal title is displayed', () => {
    const { getByTestId } = render(<Provider store={store}><Login/></Provider>);
    const title = getByTestId('modal-title');
    expect(title.textContent).toBe('Sign in using Google');
});

test('verify the google login button', () => {
    const { getByTestId } = render(<Provider store={store}><Login/></Provider>);
    const googleLoginBtn = getByTestId('google-login-btn');
    expect(googleLoginBtn).toBeInTheDocument();
})