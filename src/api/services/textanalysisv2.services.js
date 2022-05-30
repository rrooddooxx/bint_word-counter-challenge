// textanalisys service for api v2

const {
  wordRankingGenerator: rankGenerator,
} = require("./rankgenerator.services");

const { paginationService } = require("./rankpagination.services");

async function textAnalysis(data, length = 0, limit, page, url = "") {
  try {
    // destructuring
    const { id, title, text } = data;

    // string sanitizing
    const regex = /([.,:-])/g;
    sanitizedText = text.replace(regex, "").trim().toLowerCase();

    // text split to array values
    textToArr = sanitizedText.split(" ");

    // call rankgenerator
    const ranking = rankGenerator(textToArr, length);

    // call paginator
    const paginatedResults = paginationService(
      ranking,
      limit,
      page,
      length,
      url
    );

    // response object and pagination
    const apiResponse = {
      id,
      title,
      ranking: paginatedResults,
    };

    // final return to controller
    return apiResponse;
  } catch (error) {
    if (error)
      return {
        mensaje: "Error en el módulo contador de palabras",
        error: `${error}`,
      };
  }
}

module.exports = { textAnalysis };
