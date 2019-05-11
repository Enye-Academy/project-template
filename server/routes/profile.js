const express = require('express');

const router = express.Router();
const Profile = require('../controller/profile.contoller');

router.post('/create', Profile.create);
router.post('/profile/:profileId', Profile.update);

module.exports = router;
