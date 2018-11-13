let express = require('express');
let router = express.Router();
let mqttClient = require('../mqtt');

/* GET home page. */
// noinspection JSUnresolvedFunction
router.get('/', function(req, res) {
  res.render('index', { title: 'Motor Indítás' , layout: 'layout2.hbs' });
});

module.exports = router;
