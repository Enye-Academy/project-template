const STRING = {
    LANDING_PAGE_LEVEL_2_BUTTON_TEXT: 'Lets begin this Journey',
    LANDING_PAGE_LEVEL_2_PARAGRAPH_TEXT: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Deleniti porro veroDeleniti porro vero`,
    LANDING_PAGE_LEVEL_3_CONTENT_TITLE: 'Lorem Ipsum  dolor sit a ',
    LANDING_PAGE_LEVEL_3_PARAGRAPH_TEXT: `Lorem ipsum dolor sit amet consectetur adipisicin
      elit. Deleniti porro vero`,
    LANDING_PAGE_LEVEL_4_CONTENT_TITLE: 'Title 2',
    LANDING_PAGE_LEVEL_4_PARAGRAPH_TEXT: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti Lorem ipsum dolor
      consectetur adipisicing elit. Deleniti porro vero`,
    LANDING_PAGE_LEVEL_5_BUTTON_TEXT: 'Create an Account',
    LANDING_PAGE_LEVEL_5_CONTENT_TITLE: 'Lorem Ipsum  dolor sit a ',
    LANDING_PAGE_LEVEL_5_PARAGRAPH_TEXT: 'lorem dhjh jdijdj',
    LANDING_PAGE_MAIN_CONTENT_BUTTON_TEXT: 'Lets begin this Journey',
    LANDING_PAGE_MAIN_CONTENT_PARAGRAPH_TEXT: `Lorem ipsum dolor sit amet consectetur adipisicing
       elit.Deleniti porro vero`,
    LANDING_PAGE_MAIN_CONTENT_TITLE: 'Help me Title',
    PAGE_TITLE: 'Home | Welcome to Help me', // the title of the landing page
    SIGNUP: '/signup',
};

const {
    LANDING_PAGE_MAIN_CONTENT_BUTTON_TEXT,
    LANDING_PAGE_MAIN_CONTENT_PARAGRAPH_TEXT,
    LANDING_PAGE_MAIN_CONTENT_TITLE,
    LANDING_PAGE_LEVEL_2_PARAGRAPH_TEXT,
    LANDING_PAGE_LEVEL_2_BUTTON_TEXT,
    LANDING_PAGE_LEVEL_3_PARAGRAPH_TEXT,
    LANDING_PAGE_LEVEL_3_CONTENT_TITLE,
    LANDING_PAGE_LEVEL_4_PARAGRAPH_TEXT,
    LANDING_PAGE_LEVEL_4_CONTENT_TITLE,
    LANDING_PAGE_LEVEL_5_BUTTON_TEXT,
    LANDING_PAGE_LEVEL_5_PARAGRAPH_TEXT,
    LANDING_PAGE_LEVEL_5_CONTENT_TITLE,
} = STRING;

const LANDING_PAGE_CONTENTS = [
    {
        buttonLink: '/signup',
        buttonText: LANDING_PAGE_MAIN_CONTENT_BUTTON_TEXT,
        columnSection: false,
        imageLink: '../../../static/connected.svg',
        isButtonPresent: true,
        isImagePresent: true,
        level: 1,
        paragraphText: LANDING_PAGE_MAIN_CONTENT_PARAGRAPH_TEXT,
        reverseSection: false,
        title: LANDING_PAGE_MAIN_CONTENT_TITLE,
    },
    {
        buttonLink: '',
        buttonText: '',
        columnSection: true,
        imageLink: '../../../static/smile.svg',
        isButtonPresent: false,
        isImagePresent: true,
        level: 2,
        paragraphText: LANDING_PAGE_LEVEL_2_PARAGRAPH_TEXT,
        reverseSection: false,
        title: LANDING_PAGE_LEVEL_2_BUTTON_TEXT,
    },
    {
        buttonLink: '',
        buttonText: '',
        columnSection: false,
        imageLink: '../../../static/community.svg',
        isButtonPresent: false,
        isImagePresent: true,
        level: 3,
        paragraphText: LANDING_PAGE_LEVEL_3_PARAGRAPH_TEXT,
        reverseSection: true,
        title: LANDING_PAGE_LEVEL_3_CONTENT_TITLE,
    },
    {
        buttonLink: '',
        buttonText: '',
        columnSection: false,
        imageLink: '',
        isButtonPresent: false,
        isImagePresent: false,
        level: 2,
        paragraphText: LANDING_PAGE_LEVEL_4_PARAGRAPH_TEXT,
        reverseSection: true,
        title: LANDING_PAGE_LEVEL_4_CONTENT_TITLE,
    },
    {
        buttonLink: '/signup',
        buttonText: LANDING_PAGE_LEVEL_5_BUTTON_TEXT,
        columnSection: false,
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
    STRING,
    LANDING_PAGE_CONTENTS
};
