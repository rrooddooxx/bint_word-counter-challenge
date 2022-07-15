const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const fs = require("fs");
const path = require("path");
// const Handlebars = require("handlebars");
const exphbs = require("express-handlebars");

// controllers for frontend

// index
const indexController = async (req, res) => {
  let { limit = 0 } = req.query;
  limit = parseInt(limit);
  const apiUrl =
    req.protocol +
    "://" +
    req.get("host") +
    "/api/v1/ranking" +
    `?limit=${limit}`;
  const { data } = await (await fetch(apiUrl)).json();

  res.render("index", {
    data: data,
  });
};

// test

const test = async (req, res) => {
  res.render("test", { name: "seba" });
};

// apidocs

const apiDocsController = (req, res) => {
  const jsonpath = path.join(__dirname + "../../../../docs/");
  const apiv1Docs = JSON.parse(
    fs.readFileSync(path.join(jsonpath, "apiv1.json"), "utf8")
  );
  const apiv2Docs = JSON.parse(
    fs.readFileSync(path.join(jsonpath, "apiv2.json"), "utf8")
  );

  res.render("apidocs", {
    docsv1: apiv1Docs.endpoints,
    docsv2: apiv2Docs.endpoints,
  });
};

module.exports = { indexController, apiDocsController, test };
