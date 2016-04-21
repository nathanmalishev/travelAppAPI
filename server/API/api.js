var router = require('express').Router();
var me = require('./user/userRoutes');
var auth = require('./auth/routes');
var groups = require('./groups/groupRoutes')

/* This api will mount other apis */

router.use('/me', me);
router.use('/signin', auth);
router.use('/groups', groups)

module.exports = router;
