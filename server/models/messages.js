var db = require('../db');
// sql query
module.exports = {
  getAll: function (callback) {
    db.query(
      'Select * from messages',
      function(err, results) {
        if (err) {
          callback(err);
        } else {
          console.log(results);
          callback(null, results);
        }
      }
    );
  },

  // a function which produces all the messages
  create: function (message, callback) {
    let args = [message.text];
    db.query(
      'Insert into messages (text) values (?)', args,
      function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    );
  }
  // a function which can be used to insert a message into the database
};


// 'Select users.username, messages.text from messages join users where users.id = messages.username_id'