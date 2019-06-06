export const data = (id, post) => ({
    comment: 0,
    email: 'jotuya2@gmail.com',
    favouriteCount: 0,
    favourited: false,
    firstName: 'Justice',
    id,
    lastName: 'Otuya',
    liked: false,
    likes: 0,
    post,
});

export const LOADING_SKELETON = [{
    active: true,
    avatar: true,
    id: 1,
    loading: true,
    paragraph: { rows: 7 },
    title: true,
},
{
    active: true,
    avatar: true,
    id: 2,
    loading: true,
    paragraph: { rows: 7 },
    title: true,
}];

export const POPULAR_TOPIC = [
    {
        link: '#',
        text: 'Lorem, ipsum.',
    },
    {
        link: '#',
        text: 'Quaerat, fuga!',
    },
    {
        link: '#',
        text: 'Nemo, odit.',
    },
    {
        link: '#',
        text: 'Aspernatur, harum?',
    },
    {
        link: '#',
        text: 'Pariatur, libero!',
    },
    {
        link: '#',
        text: 'Voluptatem, rerum!',
    },
    {
        link: '#',
        text: 'Placeat, illo!',
    },
    {
        link: '#',
        text: 'Voluptatem, nesciunt?',
    },
];

export const STRINGS = {
    COMMENT_PLACEHOLDER: 'Write your reply',
    CREATE_POST_PLACEHOLDER: 'What is on your mind?',
    FOLLOWERS: 'followers',
    FOLLOWING: 'following',
    NAME: 'timeLine',
    ONLINE_FRIENDS: 'Online Friends',
    POPULAR_TOPIC_TEXT: 'Popular Topic',
    POST: 'post',
    TIMELINE_TITLE: 'Timeline | Find friends',
    TOGGLE_MODAL: 'TOGGLE_MODAL',
    USERS_BIO: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repellen dusharum odit inventore, iste dignissimos laudantium! Veniam.`,
};

export const USER_PROFILE = {
    followers: 445,
    following: 234,
    image: 'https://robohash.org/temporeinventorererum.bmp?size=50x50&set=set1',
    name: 'Baba Rahman',
};
