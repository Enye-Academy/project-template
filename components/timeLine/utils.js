
const PROFILE_URL = '../../static/data/timelineData.json';

export const fetchTimeLineData = async () => {
    const response = await fetch(PROFILE_URL);
    const data = await response.json();
    if (response.stats >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export const data = (id, post) => ({
    comment: 0,
    comments: [],
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
