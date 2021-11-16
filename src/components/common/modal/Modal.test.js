import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';
import { test } from '@jest/globals';

const props = {
    modalId: 'test',
    title: 'Title1',
    isFooter: true
}

test('verify modal with given id is displayed', () => {
    const { getByTestId} = render(<Modal {...props}></Modal>)
    const modal = getByTestId('modal-id');
    expect(modal.getAttribute('id')).toBe(props.modalId);
});

test('verify modal to display the title', () => {
    const { getByTestId} = render(<Modal {...props}></Modal>)
    const modalTitle = getByTestId('modal-title');
    expect(modalTitle.textContent).toBe(props.title);
});

test('verify is footer & children to be is displayed', () => {
    const { getByTestId} = render(<Modal {...props}><h2 data-testid='test'>Hi</h2></Modal>)
    const modalFooter = getByTestId('modal-footer');
    const modalChildren = getByTestId('test');
    expect(modalChildren.textContent).toBe('Hi');
    expect(modalFooter).toBeInTheDocument();
});


