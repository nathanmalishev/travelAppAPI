var router = require('express').Router();
var me = require('./user/userRoutes');
var auth = require('./auth/routes');

/* This api will mount other apis */

router.use('/me', me);
router.use('/signin', auth);

module.exports = router;
