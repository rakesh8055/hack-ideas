import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, test } from '@jest/globals';
import Home from './Home.jsx';

test('verify if header appears', () => {
    const { getByTestId } = render(<Home/>);
    const header = getByTestId('header');
    expect(header.textContent).toBe('Hack Ideas');
});

test('verify if background image is present', () => {
    const { getByTestId } = render(<Home/>);
    const homeBackgroundImage = getByTestId('home-image');
    expect(homeBackgroundImage).toBeInTheDocument();
});

