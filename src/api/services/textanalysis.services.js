const logger = require("../controllers/logger.controllers.js");

// textanalisys service for api v1

const {
  wordRankingGenerator: rankGenerator,
} = require("./rankgenerator.services");
const { rankLimiter } = require("./ranklimiter.services");

async function textAnalysis(data, length = 0, limit) {
  try {
    // destructuring
    const { id, title, text } = data;

    // string sanitizing
    const regex = /([.,:;-])/g;
    sanitizedText = text.replace(regex, "").trim().toLowerCase();

    // text split to array values
    textToArr = sanitizedText.split(" ");

    // call rank generator
    const ranking = rankGenerator(textToArr, length);

    // call rank limiter
    const limitedRank = rankLimiter(ranking, limit);

    // response object and pagination
    const apiResponse = {
      id,
      title,
      ranking: limitedRank,
    };

    logger.apiLogger.log("info", "text analysis (v1) service -> OK!");
    // final return to controller
    return apiResponse;
  } catch (error) {
    if (error) {
      logger.apiLogger.log("error", "text analysis (v1) service -> Error!");
      return {
        mensaje: "Error en el módulo contador de palabras",
        error: `${error}`,
      };
    }
  }
}

module.exports = { textAnalysis };
