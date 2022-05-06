var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    let args = [req.body['username'], req.body['message'], req.body['roomname']];
    models.messages.create(args, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  } // a function which handles posting a message to the database
};
