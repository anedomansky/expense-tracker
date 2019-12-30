import React from 'react';
import { shallow } from 'enzyme';
import ExpenseAdd from './ExpenseAdd';

describe('ExpenseAdd', () => {
    it('renders without crashing', () => {
        shallow(<ExpenseAdd />);
    });
});
