const db = require('../database');

class Cities {
  static retrieveAll(callback) {
    db.query('select city_name from cities', (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  static insert(city, callback) {
    db.query(
      'insert into cities (city_name) values ($1)',
      [city],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Cities;
