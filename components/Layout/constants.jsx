// eslint-disable-next-line import/prefer-default-export
import React from 'react';
import Link from 'next/link';

const headerTitle = 'Helpme | Connect with Friends'; // title of the header

const menuItems = [
    {
        href: '/',
        key: 1,
        text: 'Home',
    }, {
        href: '/forum',
        key: 2,
        text: 'Forum',
    }, {
        href: '/Dairy',
        key: 3,
        text: 'Dairy',
    },
];

const footerFirstColumn = [
    {
        href: '/#',
        text: 'Home',
    }, {
        href: '/contact',
        text: 'Contact us',
    }, {
        href: '/about-us',
        text: 'About Helpme',
    },
];

const footerSecondColumn = [
    {
        href: '/about-us',
        text: 'Security & Privacy',
    }, {
        href: '/terms',
        text: 'Terms Of Service',
    },
];

const footerListCreator = list => (
    <ul>
        {
            list.map(link => (
                <Link href={link.href} key={link.text}>
                    <li>
                        <a>{link.text}</a>
                    </li>
                </Link>
            ))
        }
    </ul>
);

const sideBarMenuItems = [
    {
        href: '/#',
        key: 1,
        text: 'Home',
        type: 'user',
    }, {
        href: '/forum',
        key: 2,
        text: 'Forum',
        type: 'video-camera',
    }, {
        href: '/dairy',
        key: 3,
        text: 'Dairy',
        type: 'upload',
    },
];

export {
    headerTitle, menuItems, footerFirstColumn, footerSecondColumn, footerListCreator, sideBarMenuItems
};
