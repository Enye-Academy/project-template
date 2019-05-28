const POPULAR_TOPIC = [
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

const LOADING_SKELETON = [{
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

// eslint-disable-next-line max-len
const USERS_BIO = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellen dusharum odit inventore, iste dignissimos laudantium! Veniam.';

const CREATEPOST_PLACEHOLDER = 'What is on your mind?';
const COMMENT_PLACEHOLDER = 'Write your reply';
const TIMELINE_TITLE = 'Timeline | Find friends';

export {
    POPULAR_TOPIC, USERS_BIO,
    CREATEPOST_PLACEHOLDER,
    LOADING_SKELETON, TIMELINE_TITLE, COMMENT_PLACEHOLDER
};
