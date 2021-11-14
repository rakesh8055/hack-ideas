import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, test } from '@jest/globals';
import Eventsdashboard from './Eventsdashboard';

test('verify events dashboard title', () => {
    const { getByTestId } = render(<Eventsdashboard/>);
    const eventsTitle = getByTestId('events-title');
    expect(eventsTitle.textContent).toBe('Events/Challenges');
});
