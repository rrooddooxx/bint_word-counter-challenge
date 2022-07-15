// api v2 routes

const express = require("express");
const router = express.Router();
// controllers import
const {
  text,
  ranking,
  rankingWordLength,
} = require("../controllers/apiv2.controllers.js");

// router

// index: api/v2/
router.get("/", (req, res) => {
  res.redirect("/api/v2/ranking");
});

// whole text: api/v2/text
router.get("/text", text);

// main ranking: api/v2/ranking
router.get("/ranking", ranking);

// ranking by word length: api/v2/length/:value
router.get("/ranking/length/:value", rankingWordLength);

module.exports = router;
