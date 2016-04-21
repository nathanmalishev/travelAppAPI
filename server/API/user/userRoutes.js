var router = require('express').Router();
var controller = require('./userController')

router.route('/')
  .get(controller.get)
  .put(controller.put)
  .delete(controller.delete)

module.exports = router;