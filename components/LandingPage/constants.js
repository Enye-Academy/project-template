/* eslint-disable max-len */
const PAGE_TITLE = 'Home | Welcome to Help me'; // the title of the landing page

const LANDING_PAGE_MAIN_CONTENT_TITLE = 'Help me Title';

const LANDING_PAGE_MAIN_CONTENT_PARAGRAPH_TEXT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti porro vero';

const LANDING_PAGE_MAIN_CONTENT_BUTTON_TEXT = 'Lets begin this Journey';

const LANDING_PAGE_LEVEL_2_PARAGRAPH_TEXT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti porro veroDeleniti porro vero';

const LANDING_PAGE_LEVEL_2_BUTTON_TEXT = 'Lets begin this Journey';

const LANDING_PAGE_LEVEL_3_CONTENT_TITLE = 'Lorem Ipsum  dolor sit a ';

const LANDING_PAGE_LEVEL_3_PARAGRAPH_TEXT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero';

const LANDING_PAGE_LEVEL_4_CONTENT_TITLE = 'Title 2';

const LANDING_PAGE_LEVEL_4_PARAGRAPH_TEXT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero';

const LANDING_PAGE_LEVEL_5_CONTENT_TITLE = 'Lorem Ipsum  dolor sit a ';

const LANDING_PAGE_LEVEL_5_PARAGRAPH_TEXT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero v Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero';

const LANDING_PAGE_LEVEL_5_BUTTON_TEXT = 'Create an Account';

const LANDING_PAGE_CONTENTS = [
    {
        buttonLink: '/signup',
        buttonText: LANDING_PAGE_MAIN_CONTENT_BUTTON_TEXT,
        imageLink: '../../../static/connected.svg',
        isButtonPresent: true,
        isImagePresent: true,
        level: 1,
        paragraphText: LANDING_PAGE_MAIN_CONTENT_PARAGRAPH_TEXT,
        title: LANDING_PAGE_MAIN_CONTENT_TITLE,
    },
    {
        columnSection: true,
        imageLink: '../../../static/smile.svg',
        isButtonPresent: false,
        isImagePresent: true,
        level: 2,
        paragraphText: LANDING_PAGE_LEVEL_2_PARAGRAPH_TEXT,
        title: LANDING_PAGE_LEVEL_2_BUTTON_TEXT,

    },
    {
        imageLink: '../../../static/community.svg',
        isButtonPresent: false,
        isImagePresent: true,
        level: 3,
        paragraphText: LANDING_PAGE_LEVEL_3_PARAGRAPH_TEXT,
        reverseSection: true,
        title: LANDING_PAGE_LEVEL_3_CONTENT_TITLE,
    },
    {
        isButtonPresent: false,
        isImagePresent: false,
        level: 2,
        paragraphText: LANDING_PAGE_LEVEL_4_PARAGRAPH_TEXT,
        title: LANDING_PAGE_LEVEL_4_CONTENT_TITLE,
    },
    {
        buttonLink: '/signup',
        buttonText: LANDING_PAGE_LEVEL_5_BUTTON_TEXT,
        imageLink: '../../../static/hangout.svg',
        isButtonPresent: true,
        isImagePresent: true,
        level: 3,
        paragraphText: LANDING_PAGE_LEVEL_5_PARAGRAPH_TEXT,
        reverseSection: false,
        title: LANDING_PAGE_LEVEL_5_CONTENT_TITLE,
    },
];

export {
    PAGE_TITLE,
    LANDING_PAGE_CONTENTS
};
