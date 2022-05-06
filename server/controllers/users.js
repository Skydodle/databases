var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  },
  post: function (req, res) {
    let params = [req.body['username']];
    models.users.create(params, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  }
};
