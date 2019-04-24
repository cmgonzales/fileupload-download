const fs = require('fs')
var express = require('express');
var router = express.Router();
var url = require('url')


router.get('/', function(req, res, next) {

  var query = url.parse(req.url,true).query;
  pic = query.image
  fs.readFile('/public/images/' + pic , (err, res) => {
  if(err){
    res.writeHead(400, {'Content-type': 'text/html'});
    console.log(err)
    res.end("No Image")
  }else{
    res.writeHead(200, {'Content-type': 'image/jpg'});
    res.end(content)
  }   
   });
  });
//rou

module.exports = router;



 