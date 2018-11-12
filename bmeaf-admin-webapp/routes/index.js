let express = require('express');
let router = express.Router();
let mqttClient = require('../mqtt');

/* GET home page. */
// noinspection JSUnresolvedFunction
router.get('/', function(req, res) {
  res.render('index', { title: 'Motor Indítás' , layout: 'layout2.hbs' });
});

// noinspection JSUnresolvedFunction
router.post('/message/',function (req,res) {
    res.setHeader('Content-Type', 'application/json');
    console.info("message",req.body.message);
    const message = req.body.message;
    switch (message) {
        case 'start':
            console.info("start engine");
            mqttClient.publish('animal_feeder', message);
            console.info("start published");
            break;
        case 'stop':
            console.info("stop engine");
            mqttClient.publish('animal_feeder', message);
            console.info("stop published");
            break;
    }
    res.send();
});

module.exports = router;
