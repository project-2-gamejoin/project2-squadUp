// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");
var router = require("express").Router();

// Routes
// =============================================================
// Get all users
router.get("/api/all", function(req, res) {
  var dbQuery = "SELECT * FROM gamePlay";

  connection.query(dbQuery, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// Add a new input
router.post("/api/new", function(req, res) {
  console.log("User Data:");
  console.log(req.body);

  var dbQuery = "INSERT INTO gamePlay (gameName, platform, userName, userText, hasMic) VALUES (?,?,?,?,?,?)";

  connection.query(dbQuery, [req.body.gameName, req.body.platform, req.body.userName, req.body.userText, req.body.hasMic, req.body.created_at], function(err, result) {
    if (err) throw err;
    console.log("User Input Added!");
    res.end();
  });
});

module.exports = router ;
