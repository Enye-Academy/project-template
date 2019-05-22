import React from 'react';
import ReactDOM from 'react-dom';
import { Login, SignUp, PasswordReset } from './index';

describe('Authenticcation', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Login />, div);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SignUp />, div);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PasswordReset />, div);
    });
});
