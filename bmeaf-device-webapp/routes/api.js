var express = require('express');
var router = express.Router();
const Gpio = require('pigpio').Gpio;

const motor = new Gpio(13, {mode: Gpio.OUTPUT});

let pulseWidth = 1000;
let increment = 200;

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

function sleep(milisecs){
    var initiation = new Date().getTime();
    while (( new Date().getTime()-initiation)<milisecs){

    }
}

/* GET start feeding. */
router.get('/start', function(req, res, next) {


        motor.servoWrite(1000);
     console.info('message:',req.body);
 /* console.info('motor started');
    console.info('pulseWidth', pulseWidth, increment);*/

    motor.servoWrite(1200);
    sleep(1000);
    motor.servoWrite(1000);

    /*if (pulseWidth >= 1200) {
        increment = -200;
    } else if (pulseWidth <= 1000){
        increment = 200;
    }*/


    res.json({message: 'started'});
});

/* GET stop feeding. */
router.get('/stop', function(req, res, next) {
    console.info('message:',req.body);
    /*res.json({message: 'stopped'});*/
    motor.servoWrite(1000);
    motor.servoWrite(1200);
    sleep(2000);
    motor.servoWrite(1000);

});

module.exports = router;
