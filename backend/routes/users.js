var express = require('express');
var router = express.Router();

/* GET users listng*/
router.get('/', function(req, res, next) {
  res.send('respond with resource');
});

module.exports = router;

