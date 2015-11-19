var express = require('express');
var router = express.Router();
var Skiday = require('../models/skiday.js');

// POST ONE
router.post('/skidays', function(req, res, next) {
  new Skiday({
    date: req.body.date,
    temperature: req.body.temperature,
    newSnow: req.body.newSnow,
    mountain: req.body.mountain,
    firstChair: req.body.firstChair,
    numRuns: req.body.numRuns,
    lastChair: req.body.lastChair,
    rating: req.body.rating,
    notes: req.body.notes,
  })
  .saveQ()
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});

// GET ONE
router.get('/skiday/:id', function(req, res, next) {
  Skiday.findByIdQ(req.params.id)
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});

// GET ALL
router.get('/skidays', function(req, res, next) {
  Skiday.findQ()
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});

// PUT ONE
router.put('/skiday/:id', function(req, res, next) {
  Skiday.findByIdAndUpdateQ(req.params.id, req.body)
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});

// DELETE ONE
router.delete('/skiday/:id', function(req, res, next) {
  Skiday.findByIdAndRemoveQ(req.params.id)
    .then(function(result){res.json(result)})
    .catch(function(err){res.send(err)})
    .done();
});



module.exports = router;
