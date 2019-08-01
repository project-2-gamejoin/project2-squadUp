var db = require("../models");

module.exports = function(app) {
  app.get("/api/posts", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.gamePlay.findAll({
      where: {
        createdAt: req.params.id
      }
    }).then(function(dbgamePlay) {
      res.json(dbgamePlay);
    });
  });

  app.get("/api/authors/:game_name", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Author.findOne({
      where: {
        game_name: req.params.game_name
      },
      include: [db.Post]
    }).then(function(dbgamePlay) {
      res.json(dbgamePlay);
    });
  });

  app.post("/api/make", function(req, res) {
    db.gamePlay.create(req.body).then(function(dbgamePlay) {
      res.json(dbgamePlay);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

};
