'use strict';
module.exports = function(app) {
  var diverse = require('../controllers/diverserCtrl.js');

  app.route('/login')
    .post(diverse.login);

  app.route('/compute')
    .post(diverse.compute)
};
