var express = require('express');
var router = express.Router();
var request = require("request");
var HttpStatus = require('http-status-codes');

const restPath = 'http://192.168.43.188:3001/api/';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  res.json({'message': 'bmeaf-admin webapp '});
});

/**
 * send start api request
 * @param req
 * @param res
 */
function start(req,res){
    request.get(restPath+"start", function (_err, _res, _body) {
        if (!_err) {
            var resultsObj = JSON.parse(_body);
            // Just an example of how to access properties:
            console.log(resultsObj);
            res.json({'message': 'start ready'});
        }else{
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
            res.json({'message': 'start failed'});
        }
        console.info("start finished")
    });
}

/**
 * send stop api request
 * @param req
 * @param res
 */
function stop(req,res){
    console.info("stop engine");
    // mqttClient.publish('animal_feeder', message);
    request.get(restPath+"stop", function (_err, _res, _body) {
        if (!_err) {
            var resultsObj = JSON.parse(_body);
            console.log(resultsObj);
            res.json({'message': 'stop ready'});
        }else{
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
            res.json({'message': 'start failed'});
        }
        console.info("stop finished")
    });
    console.info("stop published");
}

// noinspection JSUnresolvedFunction
router.post('/message/',function (req,res) {
    res.setHeader('Content-Type', 'application/json');
    console.info("message",req.body.message);
    const message = req.body.message;
    switch (message) {
        case 'start':
           start(req,res);
            break;
        case 'stop':
            stop(req,res);
            break;
    }
});



module.exports = router;
