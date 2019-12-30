import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List', () => {
    it('renders without crashing', () => {
        shallow(<List title="Test" addLinkInfo="Test" addLinkDestination="/category/add" success successMessage="Test" items={[]} />);
    });
});
