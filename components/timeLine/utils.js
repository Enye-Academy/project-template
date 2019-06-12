
const PROFILE_URL = '../../static/data/timelineData.json';

export const fetchTimeLineData = async () => {
    const response = await fetch(PROFILE_URL);
    const data = await response.json();
    if (response.stats >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export const generateCommentData = (id, post) => ({
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    firstName: 'Justice',
    id,
    lastName: 'Otuya',
    post,
});

export const generateData = (id, post) => ({
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    comment: 0,
    comments: [],
    email: 'jotuya2@gmail.com',
    favouriteCount: 0,
    favourited: false,
    firstName: 'Justice',
    id,
    isCommentOpen: false,
    lastName: 'Otuya',
    liked: false,
    likes: 0,
    post,
});
