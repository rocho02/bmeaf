var express = require('express');
var router = express.Router();
const Gpio = require('pigpio').Gpio;

const motor = new Gpio(13, {mode: Gpio.OUTPUT});

let pulseWidth = 0;
let increment = 1500;

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('incoming api request.');
    next(); // make sure we go to the next routes and don't stop here
});

/* GET users listing. */
router.get('/ping', function(req, res, next) {
  res.json({'message': 'ping'});
});

/* GET start feeding. */
router.get('/start', function(req, res, next) {
    console.info('message:',req.body);
    motor.servoWrite(pulseWidth);
    console.info('motor started');
     pulseWidth += increment;
     console.info('pulseWidth', pulseWidth, increment);
    if (pulseWidth >= 1500) {
       increment = -1500;
     } else if (pulseWidth <= 0){
         increment = 1500;
     }
    res.json({message: 'started'});
});

/* GET stop feeding. */
router.get('/stop', function(req, res, next) {
    console.info('message:',req.body);
    res.json({message: 'stopped'});

});

module.exports = router;
