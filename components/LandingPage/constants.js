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
        level: 1,
        title: landingPageMainContentTitle,
        paragraphText: landingPageMainContentParagraphText,
        buttonText: landingPageMainContentButtonText,
        isImagePresent: true,
        imageLink: '../../../static/connected.svg',
        buttonLink: '/signup',
        isButtonPresent: true,
    },
    {
        isButtonPresent: false,
        columnSection: true,
        isImagePresent: true,
        imageLink: '../../../static/smile.svg',
        level: 2,
        paragraphText: landingPageLevel2ParagraphText,
        title: landingPageLevel2ButtonText,

    },
    {
        level: 3,
        title: landingPageLevel3ContentTitle,
        paragraphText: landingPageLevel3ParagraphText,
        imageLink: '../../../static/community.svg',
        reverseSection: true,
        isButtonPresent: false,
        isImagePresent: true,
    },
    {
        level: 2,
        title: landingPageLevel4ContentTitle,
        paragraphText: landingPageLevel4ParagraphText,
        isImagePresent: false,
        isButtonPresent: false,
    },
    {
        level: 3,
        title: landingPageLevel5ContentTitle,
        paragraphText: landingPageLevel5ParagraphText,
        isImagePresent: true,
        imageLink: '../../../static/hangout.svg',
        reverseSection: false,
        isButtonPresent: true,
        buttonText: landingPageLevel5ButtonText,
        buttonLink: '/signup',
    },
];

export {
    pageTitle,
    landingPageContents,
    landingPageMainContentTitle,
    landingPageMainContentParagraphText,
    landingPageMainContentButtonText,
    landingPageLevel2ContentTitle,
    landingPageLevel2ParagraphText,
    landingPageLevel2ButtonText,
    landingPageLevel3ContentTitle,
    landingPageLevel3ParagraphText,
    landingPageLevel4ContentTitle,
    landingPageLevel4ParagraphText,
    landingPageLevel5ContentTitle,
    landingPageLevel5ParagraphText,
    landingPageLevel5ButtonText
};
