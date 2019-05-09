var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("app/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./app/routing/api_routes.js")(app);
require("./app/routing/html_routes.js")(app);

app.listen(PORT, function () {
    console.log("app listen on port: ", PORT);
});