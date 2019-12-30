import React from 'react';
import { shallow } from 'enzyme';
import ExpenseList from './ExpenseList';

describe('ExpenseList', () => {
    it('renders without crashing', () => {
        shallow(<ExpenseList />);
    });
});
