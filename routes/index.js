const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/home", myController.awesomeFunction);
routes.get("/ttech", myController.myFunction);

module.exports = routes;
