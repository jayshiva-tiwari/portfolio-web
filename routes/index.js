var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/shiva-portfolio", function (req, res) {
  res.render("index");
});

router.get("/contact-shiva", function (req, res) {
  res.render("contact");
});

router.get("/about-shiva", function (req, res) {
  res.render("about");
});

router.get("/service-shiva", function (req, res) {
  res.render("service");
});

module.exports = router;
