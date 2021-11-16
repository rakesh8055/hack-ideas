import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Addevent from './Addevent';
import { test } from '@jest/globals';

const props = {
    modalId: 'events-modal',
    title: 'Add Ideas/Challenge',
    isFooter: true
}

test('verify if Add Event pop up with given Id is displayed', () => {
    const { getByTestId } = render(<Addevent/>);
    const modal = getByTestId('modal-id');
    expect(modal.getAttribute('id')).toBe(props.modalId);
});

test('verify if title is displayed correctly', () => {
    const { getByTestId } = render(<Addevent/>);
    const title = getByTestId('title');
    fireEvent.change(title, { target: { value: 'Test1'}});
    expect(title.value).toBe('Test1');
});

test('verify if description is displayed correctly', () => {
    const { getByTestId } = render(<Addevent/>);
    const description = getByTestId('description');
    fireEvent.change(description, { target: { value: 'Description1'}});
    expect(description.value).toBe('Description1');
});