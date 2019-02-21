var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./database');

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV;


const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/todos', require('./api/todos'));



app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})


db.query('SELECT NOW()', (err, res) => {
  if (err.error)
    return console.log(err.error);

  console.log(`PostgreSQL connected: ${res[0].now}.`);
});

module.exports = app;