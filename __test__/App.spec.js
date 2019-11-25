import React from 'react';
import toJson from 'enzyme-to-json';
import App from '../src/App';
import { mount } from './enzyme';

describe('SAMPLE TEST', () => {
    it('should return a successful sample test ', () => {
        expect(true).toBeTruthy();
    });

    it('should render the App component correctly', () => {
        const Wrapper = mount(<App />);
        expect(toJson(Wrapper)).toMatchSnapshot();
        expect(Wrapper.find('h1')).toHaveLength(1);
    });
});
