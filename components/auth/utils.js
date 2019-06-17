import auth0 from 'auth0-js';

export const authConfig = new auth0.WebAuth({
    clientID: `${process.env.clientID}`,
    domain: 'teamhelpme.auth0.com',
    redirectUri: 'http://localhost:3000/auth/signed-in',
    responseType: 'token id_token',
    scope: 'openid profile email',
});

let userProfile = {};

export const getAccessToken = () => {
    if (localStorage.getItem('access_token')) {
        const accessToken = localStorage.getItem('access_token');
        return accessToken;
    }
    console.log('No accessToken');
    return null;
};

export const getProfile = () => {
    const accessToken = getAccessToken();
    if (accessToken) {
        authConfig.client.userInfo(accessToken, (err, profile) => {
            if (profile) {
                userProfile = { profile };
                localStorage.setItem('profile', JSON.stringify(userProfile));
            }
        });
    }
};

export const setSession = authResult => {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    getProfile();
};

export const login = () => {
    authConfig.authorize();
};

export const logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('profile');
    userProfile = null;
    return userProfile;
};

export const handleAuthentication = () => new Promise((resolve, reject) => {
    authConfig.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
            setSession(authResult);
            getProfile(authResult.accessToken);
            return resolve();
        } if (err) {
            login();
            return reject();
        }
        return reject();
    });
});

export const isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
};
