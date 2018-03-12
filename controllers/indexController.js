var fs = require('fs');
global.fetch = require('node-fetch')
const cc = require('cryptocompare')
const howMuch = require('how-much');

module.exports.get_zero_page = function(req, res) {
  res.render('zero');
}

module.exports.get_first_page = function(req, res) {
  res.render('first');
}

module.exports.get_second_page = function(req, res) {
  res.render('second');
}

module.exports.get_third_page = function(req, res) {
  res.render('third');
}