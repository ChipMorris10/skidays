var mongoose = require('mongoose-q')(require('mongoose'),{spread:true});
// var mongose = require('mongoose');
var Schema = mongoose.Schema;

var Skiday = new Schema({
  date: Date,
  temperature: Number,
  newSnow: Number,
  conditions: String,
  mountain: String,
  firstChair: String,
  numRuns: Number,
  lastChair: String,
  skiedWith: String,
  rating: Number,
  notes: String,
});



mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/skidays');
module.exports = mongoose.model('skiday', Skiday);
