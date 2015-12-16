var express = require('express');
var router = express.Router();
var baseURL = 'http://api.wunderground.com/api/';
var key = 'a9cfbaa4c26af05c';
var request = require('request');

router.get('/copper', function(req, res) {
  request(baseURL+key+'/conditions/q/CO/Copper_Mountain.json', function(error, data){
    if(error){
      console.log(error);
  } else {
  var body = JSON.parse(data.body);
  var temp_f = body.current_observation.temp_f
  res.json(body.current_observation.temp_f);
  }
});
});

router.get('/steamboat', function(req, res) {
  request(baseURL+key+'/conditions/q/CO/Steamboat_Springs.json', function(error,data){
    if(error){
      console.log(error);
    } else {
      var body = JSON.parse(data.body);
    res.json(body.current_observation.temp_f);
    }
  });
});




module.exports = router;
