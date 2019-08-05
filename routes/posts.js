var db = require("../models");
var moment = require('moment');
moment().format();
const { Op } = require('sequelize');

var TIME_TO_SHOW = 1;
var AMOUNT_OF_TIME = "days"


module.exports = function (app) {
  app.get("/api/posts", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.gamePlay.findAll({
      where: {
        createdAt: {
          [Op.gte]: moment().subtract(TIME_TO_SHOW, AMOUNT_OF_TIME).toDate()
        }
      }
    }).then(function (dbgamePlay) {
      res.json(dbgamePlay);
    });
  });

  app.get("/api/posts/:game_name", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.gamePlay.findAll({
      where: {
        game_name: req.params.game_name,
        createdAt: {
          [Op.gte]: moment().subtract(TIME_TO_SHOW, AMOUNT_OF_TIME).toDate()
        }
      }
    }).then(function (dbgamePlay) {
      res.json(dbgamePlay);
    }).catch(function (err) {
      console.log(err);
      res.sendStatus(500)
    });

  });

  app.post("/api/make", function (req, res) {
    db.gamePlay.create(req.body).then(function (dbgamePlay) {
      res.json(dbgamePlay);
    });
  });

};
