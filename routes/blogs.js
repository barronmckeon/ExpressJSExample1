var express = require("express");
const { blogPosts } = require("../sampleBlogs");
var router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "blogs" });
});
router.get("/all", function (req, res, next) {
  res.send([blogPosts]);
});

router.get("/:id/:title", function (req, res, next) {
  console.log(req.params);
  let id = req.params.id;
  res.send(`${text}`);
});

module.exports = router;
