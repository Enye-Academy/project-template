import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './index';

describe('LandingPage', () => {
    it('LandingPage should renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LandingPage />, div);
    });
});
