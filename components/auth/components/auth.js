import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        clientID: process.env.clientID,
        domain: 'teamhelpme.auth0.com',
        redirectUri: 'http://localhost:3000/auth/signed-in',
        responseType: 'token id_token',
        scope: 'openid profile email',
    });

      userProfile = {}

      login = () => {
          this.auth0.authorize();
      }

      // ...

      handleAuthentication = () => new Promise((resolve, reject) => {
          this.auth0.parseHash((err, authResult) => {
              if (authResult && authResult.accessToken && authResult.idToken) {
                  this.setSession(authResult);
                  this.getProfile(authResult.accessToken);
                  return resolve();
              } if (err) {
                  this.login();
                  return reject();
              }
              return reject();
          });
      })

      setSession = authResult => {
          // Set the time that the access token will expire at
          const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
          localStorage.setItem('access_token', authResult.accessToken);
          localStorage.setItem('id_token', authResult.idToken);
          localStorage.setItem('expires_at', expiresAt);
          // navigate to the home route
          this.getProfile();
      }

      logout = () => {
          // Clear access token and ID token from local storage
          localStorage.removeItem('access_token');
          localStorage.removeItem('id_token');
          localStorage.removeItem('expires_at');
          localStorage.removeItem('profile');
          this.userProfile = null;
          // navigate to the home route
          //   Router.push('/');
      }

      getAccessToken = () => {
          if (localStorage.getItem('access_token')) {
              const accessToken = localStorage.getItem('access_token');
              return accessToken;
          }
          console.log('No accessToken');
          return null;
      }

      getProfile = () => {
          const accessToken = this.getAccessToken();
          if (accessToken) {
              this.auth0.client.userInfo(accessToken, (err, profile) => {
                  if (profile) {
                      this.userProfile = { profile };
                      localStorage.setItem('profile', JSON.stringify(this.userProfile));
                  }
              });
          }
      }

      isAuthenticated = () => {
          // Check whether the current time is past the
          // access token's expiry time
          const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
          return new Date().getTime() < expiresAt;
      }
}
