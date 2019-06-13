export const LOADING_SKELETON = [{
    active: true,
    avatar: true,
    id: 1,
    loading: true,
    paragraph: { rows: 3 },
    title: true,
},
{
    active: true,
    avatar: true,
    id: 2,
    loading: true,
    paragraph: { rows: 3 },
    title: true,
},
{
    active: true,
    avatar: true,
    id: 3,
    loading: true,
    paragraph: { rows: 3 },
    title: true,
}];

export const TabPanes = children => [
    {
        children,
        key: '1',
        tab: 'Latest',
    }, {
        children,
        key: '2',
        tab: 'Trending',
    }, {
        children,
        key: '3',
        tab: 'Favourite',
    }, {
        children,
        key: '4',
        tab: 'Answered',
    },
];

export const FORUM_REACTION = () => [
    {
        action: ' answers',
        iconType: 'message',
        id: '1',
        textType: 'secondary',
    }, {
        action: ' votes',
        iconType: 'arrow-up',
        id: '2',
        textType: 'secondary',
    }, {
        action: ' views',
        iconType: 'eye',
        id: '3',
        textType: 'secondary',
    },
];

export const TOP_USERS = [{
    avatar: 'https://randomuser.me/api/portraits/men/68.jpg',
    commentCount: 30,
    dateJoined: '2017',
    name: 'Macho',
    postCount: 12,
},
{
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
    commentCount: 30,
    dateJoined: '2018',
    name: 'Idris Kaine',
    postCount: 67,
},
{
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    commentCount: 300,
    dateJoined: '2019',
    name: 'Justice',
    postCount: 12,
},
];

export const STRINGS = {
    ANSWERED_CONTENT: 'Content of Tab Pane 4',
    ANSWERS: ' answers',
    ASKED: 'asked ',
    BLOG_TOPIC_LINK: '/forum/post?title=',
    FAVORITE_CONTENT: 'Content of Tab Pane 3',
    PAGE_TITLE: 'Forum | talk about topics you like',
    SINCE: 'since ',
    TOP_USERS_HEADING: 'Top Users of The Week',
    TRENDING_CONTENT: 'Content of Tab Pane 2',
    VIEWS: ' views',
    VOTES: ' votes',
};
