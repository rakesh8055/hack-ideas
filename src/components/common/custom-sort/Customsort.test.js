import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, test } from '@jest/globals';
import Customsort from './Customsort';

test('verify the sort button is displayed', () => {
    const {getByTestId} = render(<Customsort/>);
    const sortBtn = getByTestId('sort-btn');
    expect(sortBtn).toBeInTheDocument();
})
