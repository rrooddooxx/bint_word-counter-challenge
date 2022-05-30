const express = require("express");
const router = express.Router();

// controllers import
const {
  indexController,
  apiDocsController,
  test,
} = require("../controllers/front.controllers.js");

// frontend views:

// index
router.get("/", indexController);

// api docs
router.get("/docs", apiDocsController);

// test
router.get("/test", test);

// 404 handler
router.get("*", (req, res) => {
  /* res.status(404).send({
    mensaje: "Error 404! Recurso no encontrado :(",
    errorCode: res.statusCode,
  }); */
  res.status(404).render("404");
});

module.exports = router;
