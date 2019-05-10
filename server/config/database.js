require('dotenv').config();

module.exports = {
    url: process.env.MONGODB_DEV_URL,
    url_production: process.env.MONGODB_URL,
    url_test: process.env.MONGODB_TEST_URL,
};
