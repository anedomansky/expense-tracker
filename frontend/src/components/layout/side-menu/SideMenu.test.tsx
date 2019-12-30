import React from 'react';
import { shallow } from 'enzyme';
import SideMenu from './SideMenu';

describe('SideMenu', () => {
    it('renders without crashing', () => {
        const component = shallow(<SideMenu />);
        expect(component.find('img').hasClass('sidenav__icon')).toEqual(true);
    });
});
