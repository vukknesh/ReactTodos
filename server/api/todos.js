var express = require('express');
var Todos = require('../models/todos');

var router = express.Router();

router.get('/', (req, res) => {
  Todos.retrieveAll((err, title) => {
    if (err)
      return res.json(err);
    return res.json(title, completed);
  });
});

router.post('/', (req, res) => {
  var title = req.body.title;

  Todos.insert(title, (err, result) => {
    if(err)
      return res.json(err);
    
    
    return res.json(result);
    
  });
});

module.exports = router;