// middleware to protect routes and ensure they are only accessible if logged in.
module.exports = () => async (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect('/login');
};
