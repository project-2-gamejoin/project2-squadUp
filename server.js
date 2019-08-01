// Dependencies
// =============================================================
var express = require("express");
var db = require("./models")
var moment = require('moment');
moment().format();
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./routes/posts.js")(app);
// require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);

    })

});