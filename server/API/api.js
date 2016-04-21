var router = require('express').Router();
var me = require('./user/userRoutes')

/* This api will mount other apis */

router.use('/me', me);

module.exports = router;
