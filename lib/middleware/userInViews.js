// the user object is necessary in order to customize the view.
module.exports = () => (req, res, next) => {
    res.locals.user = req.user;
    next();
};
