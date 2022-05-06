var db = require('../db');

module.exports = {
  getAll: function(callback) {
    var queryStr = 'select * from users';
    db.query(queryStr, function(err, results) {
      callback(results);
    });
  },
  create: function(params, callback) {
    //create a user
    var queryStr = 'insert into users(username) values (?)';
    db.query(queryStr, params, function(err, results) {
      callback(results);
    });
  }
};


// users: {
//   get: function(callback) {
//     // fetch all users
//     var queryStr = 'select * from users';
//     db.query(queryStr, function(err, results) {
//       callback(results);
//     });
//   },
//   post: function(params, callback) {
//     // create a user
//     var queryStr = 'insert into users(username) values (?)';
//     db.query(queryStr, params, function(err, results) {
//       callback(results);
//     });
//   }
// }