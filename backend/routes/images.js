const fs = require('fs')
var express = require('express');
var router = express.Router();

const logs = []
router.get('/', function(req, res, next) {
  fs.readdir('./public/images', (err, files) => {
    files.forEach(file => {
       logs.push(files)
        res.send(files)
        
   });
  });
});

module.exports = router;



 