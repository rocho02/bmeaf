var express = require('express');
var router = express.Router();
var myip = require('quick-local-ip');

/* GET home page. */
router.get('/', function(req, res, next) {

    const apiUrl = req.protocol + '://' + req.get('host') +"/api/";
    console.info(apiUrl);

    const serverIp =  myip.getLocalIP4();

  res.render('index',
      {
          title: 'BME Animal Feeder Device WebApp',
          apiUrl: apiUrl,
          serverIp: serverIp
      }
      );
});

module.exports = router;
