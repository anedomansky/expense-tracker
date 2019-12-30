import React from 'react';
import { shallow } from 'enzyme';
import CategoryList from './CategoryList';

describe('CategoryList', () => {
    it('renders without crashing', () => {
        shallow(<CategoryList />);
    });
});
