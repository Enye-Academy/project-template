/* eslint-disable global-require */
// The code above makes a request to Auth0 server to initiate and authorize a user.

const getAuth0 = () => {
    const auth0 = require('auth0-js');

    return new auth0.WebAuth({
        clientID: process.env.clientID,
        domain: 'teamhelpme.auth0.com',
    });
};

export const getBaseUrl = () => `${window.location.protocol}//${window.location.host}`;

const getOptions = () => ({
    redirectUri: `${getBaseUrl()}/auth/signed-in`,
    responseType: 'token id_token',
    scope: 'openid profile email',
});

export const authorize = () => getAuth0().authorize(getOptions());

export const logout = () => getAuth0().logout({ returnTo: getBaseUrl() });

export const parseHash = callback => getAuth0().parseHash(callback);
