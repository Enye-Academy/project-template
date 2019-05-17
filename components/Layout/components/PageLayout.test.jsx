import React from 'react';
import ReactDOM from 'react-dom';
import NavHeader from './NavHeader';
import PageFooter from './PageFooter';
import Sidebar from './Sidebar';
import PageLayout from './index';

describe('PageLayout , NavHeader, PageFooter,Sidebar and PageLayout', () => {
    it('NavHeader should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NavHeader />, div);
    });

    it('PageFooter should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PageFooter />, div);
    });

    it('Sidebar should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Sidebar />, div);
    });

    it('PageLayout should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PageLayout />, div);
    });
});
