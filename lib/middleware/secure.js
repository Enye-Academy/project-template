// middleware to protect routes and ensure they are only accessible if logged in.
module.exports = () => (req, res, next) => {
    // eslint-disable-next-line no-unused-vars
    const { user, session, originalUrl } = req;
    const { redirect } = res;

    if (user) {
        return next();
    }

    session.returnTo = originalUrl;
    return redirect('/login');
};
