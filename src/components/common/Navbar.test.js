import React from 'react';
import Navbar from './Navbar';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('verify Home button on the Navbar', () => {
    const { getByTestId } = render(<Navbar/>);
    const homeLink = getByTestId('home');
    expect(homeLink.textContent).toBe('Home')
});

test('verify Ideas/Challenges button on the Navbar', () => {
    const { getByTestId } = render(<Navbar/>);
    const homeLink = getByTestId('ideas');
    expect(homeLink.textContent).toBe('Ideas/Challenges')
});
