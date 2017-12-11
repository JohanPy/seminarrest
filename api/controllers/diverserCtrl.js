'use strict';
 

var math = require('mathjs');
//initializing an expired token
var tokenhex = "oldTK";
var dateTok = 0;

exports.login = function(req, res) {
  if (req.body.login == "admin" && req.body.pass == "admin") {
    tokenhex = Math.random().toString(36).substr(2, 12);
    dateTok = Date.now();
    res.json({token: tokenhex});
  } else {
    res.json({fault: "invalid login and password"});
         }
};


exports.compute = function(req, res) {
    if (req.body.token == tokenhex && dateTok > Date.now() -(15*60*1000)) {
       var result = math.eval(req.body.expression);
       res.json({result: result});
    } else {
       res.json({result: "case not covered by the contract"});
           }
};
