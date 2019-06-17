import React from 'react';
import ReactDOM from 'react-dom';
import { ForumComponent } from './Forum';

describe('Forum', () => {
    it('Forum should renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ForumComponent />, div);
    });
});
