'use strict';
 

var math = require('mathjs');
var crypto = require('crypto')
var tokenhex = "test"
 

exports.login = function(req, res) {
  if (req.body.login == "admin" && req.body.pass == "admin") {
//    crypto.randomBytes(48, function(err, buffer) {
//    tokenhex = buffer.toString('hex'); });
    tokenhex = Math.random().toString(36).substr(2, 15)
    res.send({token: tokenhex});
  } else {
    res.send({fault: "invalid login and password"});
    console.log('body: ', req.body);
         }
};


exports.compute = function(req, res) {
    if (req.body.token == tokenhex) {
       var resultat = math.eval(req.body.expression)
       res.json({result: resultat});
    } else {
       console.log('body: ', req.body);
       console.log('token'+tokenhex);
       res.json({result: "case not covered by the contract"});
           }
};
