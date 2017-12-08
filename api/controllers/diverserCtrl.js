'use strict';
 

var math = require('mathjs');
var crypto = require('crypto')


exports.login = function(req, res) {
  if (req.body.login == "admin" && req.body.pass == "admin") {
    crypto.randomBytes(48, function(err, buffer) {
    var tokenhex = buffer.toString('hex'); });
    res.json({token: tokenhex});
  } else {
    res.send({fault: "invalid login and password"});
    console.log('body: ' + req.body.login);
         }
};


exports.compute = function(req, res) {
    if (req.body.token == tokenhex) {
       var resultat = math.eval(req.body.expression)
       res.json({result: resultat});
    } else {
       res.json({result: "case not covered by the contract"});
           }
};
