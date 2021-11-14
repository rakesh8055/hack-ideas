import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, test } from '@jest/globals';
import Card from './Card';

const props = {
    title: 'title1',
    text: 'text',
    tags: ['tag1'],
    likes: 3
}

test('verify card title is displayed', () => {
    const { getByTestId } = render(<Card {...props}/>);
    const title = getByTestId('card-title');
    expect(title.textContent).toBe(props.title);
});

test('verify card text is displayed', () => {
    const { getByTestId } = render(<Card {...props}/>);
    const text = getByTestId('card-text');
    expect(text.textContent).toBe(props.text);
});

test('verify the tags are displayed', () => {
    const { getByTestId } = render(<Card {...props}/>);
    const tags = getByTestId('card-tags');
    expect(tags.textContent).toBe(props.tags[0]);
});

test('verify the votes are displayed', () => {
    const { getByTestId } = render(<Card {...props}/>);
    const votes = getByTestId('card-votes');
    expect(Number(votes.textContent)).toBe(props.likes);
});
