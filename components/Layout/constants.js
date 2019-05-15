// eslint-disable-next-line import/prefer-default-export
const headerTitle = 'Helpme | Connect with Friends'; // title of the header

const menuItems = [
    {
        key: 1,
        href: '/',
        text: 'Home',
    }, {
        key: 2,
        href: '/forum',
        text: 'Forum',
    }, {
        key: 3,
        href: '/Dairy',
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
        key: 1,
        href: '/#',
        type: 'user',
        text: 'Home',
    }, {
        key: 2,
        href: '/forum',
        type: 'video-camera',
        text: 'Forum',
    }, {
        key: 3,
        href: '/dairy',
        type: 'upload',
        text: 'Dairy',
    },
];

export {
    headerTitle, menuItems, footerFirstColumn, footerSecondColumn, sideBarMenuItems
};
