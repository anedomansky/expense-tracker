import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
    it('renders without crashing', () => {
        const component = shallow(<NotFoundPage />);
        expect(component.find('section').hasClass('not-found-page')).toEqual(true);
    });
});
