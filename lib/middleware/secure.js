// middleware to protect routes and ensure they are only accessible if logged in.
module.exports = () => function secured(req, res, next) {
    // eslint-disable-next-line no-unused-vars
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect('/login');
};
