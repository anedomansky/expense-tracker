import React from 'react';
import { shallow } from 'enzyme';
import CategoryAdd from './CategoryAdd';

describe('CategoryAdd', () => {
    it('renders without crashing', () => {
        shallow(<CategoryAdd />);
    });
});
