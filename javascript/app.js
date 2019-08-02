const express = require("express");
const exphb = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

//database
const Sequelize = require('sequelize');

const db = new Sequelize('squadup', 'mysql', '123456', {
    host: 'localhost',
    dialect: "mysql",

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },

  });
const db = require("../config/database")
  //db test
  db.authenticate()
    .then(() => console.log('database is connected...'))
    .catch(err => console.log('Error:' + err))

const app = express();

app.get("/", (req, res) => res.send("INDEX"));

const PORT = process.env.PORT || 3306;

app.listen(PORT, console.log('Server started on port')); 