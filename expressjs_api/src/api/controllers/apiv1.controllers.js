// services import
const { fetchText } = require("../services/fetchtext.services.js");
const { textAnalysis } = require("../services/textanalysis.services.js");
const logger = require("./logger.controllers.js");

// controllers
// index controller
/* const index = async (req, res) => {
  try {
    const apiCall = await fetchText();
    const response = await textAnalysis(apiCall);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
}; */

// whole text controller
const text = async (req, res) => {
  try {
    const apiCall = await fetchText();
    logger.apiLogger.log("info", "v1/text -> Entregado con éxito");
    return res.status(200).send(apiCall);
  } catch (error) {
    logger.apiLogger.log("error", "v1/text -> Error!");
    return res.status(500).send(error);
  }
};

// main ranking with default values
const ranking = async (req, res) => {
  try {
    const { length, limit } = req.query;
    const apiCall = await fetchText();
    const response = await textAnalysis(apiCall, length, limit);
    logger.apiLogger.log("info", "v1/ranking -> Entregado con éxito");
    return res.status(200).send({ data: response });
  } catch (error) {
    logger.apiLogger.log("error", "v1/ranking -> Error!");
    return res.status(500).send(error);
  }
};

// ranking with word lenght value
const rankingWordLength = async (req, res) => {
  const { value: lengthValue } = req.params;
  try {
    const apiCall = await fetchText();
    const response = await textAnalysis(apiCall, lengthValue);
    logger.apiLogger.log("info", "v1/ranking/length -> Entregado con éxito");
    return res.status(200).send({ data: response });
  } catch (error) {
    logger.apiLogger.log("error", "v1/ranking/length -> Error!");
    return res.status(500).send(error);
  }
};

module.exports = { text, ranking, rankingWordLength };
