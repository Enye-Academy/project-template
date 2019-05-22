// eslint-disable-next-line import/prefer-default-export
const HEADER_TITLE = 'Helpme | Connect with Friends'; // title of the header

const MENU_ITEMS = [
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

const FOOTER_FIRST_COLUMN = [
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

const FOOTER_SECOND_COLUMN = [
    {
        href: '/about-us',
        text: 'Security & Privacy',
    }, {
        href: '/terms',
        text: 'Terms Of Service',
    },
];

const SIDEBAR_MENU_ITEMS = [
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
    HEADER_TITLE, MENU_ITEMS, FOOTER_FIRST_COLUMN, FOOTER_SECOND_COLUMN, SIDEBAR_MENU_ITEMS
};
