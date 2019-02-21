const db = require('../database');

class Todos {
  static retrieveAll (callback) {
    db.query('SELECT title, completed, id from todos', (err, res) => {
      if(err.error) 
        return callback(err);
      callback(res);
    });
  }
  static insert(title, callback) {
    db.query('INSERT INTO todos (title) VALUES ($1)', [title], (err, res) => {
      if(err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = Todos;