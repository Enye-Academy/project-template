// eslint-disable-next-line import/prefer-default-export
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
    headerTitle, menuItems, footerFirstColumn, footerSecondColumn, sideBarMenuItems
};
