import React from 'react';
import Navbar from './Navbar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

test('verify Home button on the Navbar', () => {
    const { getByTestId } = render(<Provider store={store}><Navbar/></Provider>);
    const homeLink = getByTestId('home');
    expect(homeLink.textContent).toBe('Home')
});

test('verify Ideas/Challenges button on the Navbar', () => {
    const { getByTestId } = render(<Provider store={store}><Navbar/></Provider>);
    const homeLink = getByTestId('ideas');
    expect(homeLink.textContent).toBe('Ideas/Challenges')
});

test('verify logo to be present in the navbar', () => {
    const { getByTestId } = render(<Provider store={store}><Navbar/></Provider>);
    const logo = getByTestId('logo');
    expect(logo).toBeInTheDocument();
});
