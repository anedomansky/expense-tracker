import React from 'react';
import { shallow } from 'enzyme';
import Add from './Add';

describe('Add', () => {
    const onSubmit = jest.fn();

    it('renders without crashing', () => {
        shallow(<Add title="Test" successMessage="Test" onSubmit={onSubmit} />);
    });
});
