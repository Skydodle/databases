var db = require('../db');
// sql query
module.exports = {

  getAll: function (callback) {
    // fetch all messages
    db.query(
      'Select messages.id, users.username, messages.text, messages.roomname from messages join users',
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

  create: function (args, callback) {
    // create a message
    db.query(
      'Insert into messages (username_id, text, roomname) values ((select id from users where username = ? limit 1), ?, ?)', args,
      function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    );
  }



};

// a function which can be used to insert a message into the database
// 'Select users.username, messages.text from messages join users where users.id = messages.username_id'