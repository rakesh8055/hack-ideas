import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, test } from '@jest/globals';
import Card from './Card';

const props = {
    title: 'title1',
    text: 'text'
}

test('verify card title, text', () => {
    const { getByTestId } = render(<Card props={props}/>)
    const title = getByTestId('card-title');
    const text = getByTestId('card-text');
    expect(title.textContent).toBe(props.title);
    expect(text.textContent).toBe(props.text);
});