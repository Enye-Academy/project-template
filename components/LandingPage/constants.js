/* eslint-disable max-len */
const pageTitle = 'Home | Welcome to Help me'; // the title of the landing page

const landingPageMainContentTitle = 'Help me Title';

const landingPageMainContentParagraphText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti porro vero';

const landingPageMainContentButtonText = 'Lets begin this Journey';

const landingPageLevel2ContentTitle = 'Title2';

const landingPageLevel2ParagraphText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti porro veroDeleniti porro vero';

const landingPageLevel2ButtonText = 'Lets begin this Journey';

const landingPageLevel3ContentTitle = 'Lorem Ipsum  dolor sit a ';

const landingPageLevel3ParagraphText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero';

const landingPageLevel4ContentTitle = 'Title 2';

const landingPageLevel4ParagraphText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero';

const landingPageLevel5ContentTitle = 'Lorem Ipsum  dolor sit a ';

const landingPageLevel5ParagraphText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero v Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro vero';

const landingPageLevel5ButtonText = 'Create an Account';

const landingPageContents = [
    {
        buttonLink: '/signup',
        buttonText: landingPageMainContentButtonText,
        imageLink: '../../../static/connected.svg',
        isButtonPresent: true,
        isImagePresent: true,
        level: 1,
        paragraphText: landingPageMainContentParagraphText,
        title: landingPageMainContentTitle,
    },
    {
        columnSection: true,
        imageLink: '../../../static/smile.svg',
        isButtonPresent: false,
        isImagePresent: true,
        level: 2,
        paragraphText: landingPageLevel2ParagraphText,
        title: landingPageLevel2ButtonText,

    },
    {
        imageLink: '../../../static/community.svg',
        isButtonPresent: false,
        isImagePresent: true,
        level: 3,
        paragraphText: landingPageLevel3ParagraphText,
        reverseSection: true,
        title: landingPageLevel3ContentTitle,
    },
    {
        isButtonPresent: false,
        isImagePresent: false,
        level: 2,
        paragraphText: landingPageLevel4ParagraphText,
        title: landingPageLevel4ContentTitle,
    },
    {
        buttonLink: '/signup',
        buttonText: landingPageLevel5ButtonText,
        imageLink: '../../../static/hangout.svg',
        isButtonPresent: true,
        isImagePresent: true,
        level: 3,
        paragraphText: landingPageLevel5ParagraphText,
        reverseSection: false,
        title: landingPageLevel5ContentTitle,
    },
];

export {
    pageTitle,
    landingPageContents
};
