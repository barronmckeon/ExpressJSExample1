var express = require("express");
var router = express.Router();
var movies = ["one, two, three"];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/myName", function (req, res, next) {
  res.json("Barron Mckeon");
});

router.get("/favoriteMovies", function (req, res, next) {
  res.json(movies);
});

module.exports = router;
