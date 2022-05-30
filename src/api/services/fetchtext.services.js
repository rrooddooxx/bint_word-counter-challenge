const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const logger = require("../controllers/logger.controllers.js");

// functions
async function fetchText() {
  try {
    // external api url
    const apiUrl = "http://localhost:8080/generator/word-counter/text";

    // fetching
    async function fetchFromApi(url) {
      const body = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // parsing response to text
      const responseBody = await body.text();

      // escaping line breaks
      function charEscape(str) {
        const regex_lbreak = /\\n/g;
        return str.replace(regex_lbreak, " ");
      }

      // parsing to json
      const response = JSON.parse(charEscape(responseBody));
      return response;
    }

    // first external api fetch
    const data = await fetchFromApi(apiUrl);

    // traversing hateoas
    if (data.total_pages > 1) {
      let newText = "";
      for (let i = 1; i <= data.total_pages; i++) {
        const apiCall = await fetchFromApi(
          apiUrl + `?id=${data.id}&&page=${i}`
        );
        i == 1 ? (newText += apiCall.text) : (newText += " " + apiCall.text);
      }
      data.text = newText;
    }
    logger.apiLogger.log("info", "fetch service -> OK!");
    return data;
  } catch (error) {
    if (error) {
      logger.apiLogger.log("error", "fetch service -> Error!");
      console.log(error);
      return {
        mensaje: "Error de fetch sobre la API",
        error: `${error}`,
      };
    }
  }
}

module.exports = { fetchText };
