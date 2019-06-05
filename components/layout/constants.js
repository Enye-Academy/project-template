// eslint-disable-next-line import/prefer-default-export

export const MENU_ITEMS = [
    {
        href: '/home',
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

export const FOOTER_FIRST_COLUMN = [
    {
        href: '/',
        text: 'Home',
    }, {
        href: '/contact',
        text: 'Contact us',
    }, {
        href: '/about-us',
        text: 'About Helpme',
    },
];

export const FOOTER_SECOND_COLUMN = [
    {
        href: '/about-us',
        text: 'Security & Privacy',
    }, {
        href: '/terms',
        text: 'Terms Of Service',
    },
];

export const SIDEBAR_MENU_ITEMS = [
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

export const LINKS = {
    LOGIN_LINK: '/api/users/login',
};

export const IMAGE_URLS = {
    HELPME_LOGO: '../../../static/logo.png',
};

export const IMAGE_ALT = {
    HELPME_LOGO_DESC: 'helpme logo',
};

export const STRINGS = {
    HEADER_TITLE: 'Helpme | Connect with Friends', // title of the header
    LOGIN: 'Login',
    LOGOUT: 'Logout',
};
