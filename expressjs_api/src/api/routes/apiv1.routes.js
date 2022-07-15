// api v1 routes

const express = require("express");
const router = express.Router();
// controllers import
const {
  text,
  ranking,
  rankingWordLength,
} = require("../controllers/apiv1.controllers.js");

// router

// index: api/v1/
router.get("/", (req, res) => {
  res.redirect("/api/v1/ranking");
});

// whole text: api/v1/text
router.get("/text", text);

// main ranking: api/v1/ranking
router.get("/ranking", ranking);

// ranking by word length: api/v1/length/:value
router.get("/ranking/length/:value", rankingWordLength);

module.exports = router;
