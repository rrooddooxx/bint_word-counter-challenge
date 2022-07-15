// services import
const { fetchText } = require("../services/fetchtext.services.js");
const { textAnalysis } = require("../services/textanalysisv2.services.js");
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
    logger.apiLogger.log("info", "v2/text -> Entregado con éxito!");
    return res.status(200).send(apiCall);
  } catch (error) {
    logger.apiLogger.log("error", "v2/text -> Error!");
    return res.status(500).send(error);
  }
};

// main ranking with default values
const ranking = async (req, res) => {
  try {
    const currentUrl =
      req.protocol + "://" + req.get("host") + req.baseUrl + req.path;
    const { length, page, limit } = req.query;
    const apiCall = await fetchText();
    const response = await textAnalysis(
      apiCall,
      length,
      limit,
      page,
      currentUrl
    );
    logger.apiLogger.log("info", "v2/ranking -> Entregado con éxito!");
    return res.status(200).send({ data: response });
  } catch (error) {
    logger.apiLogger.log("error", "v2/ranking -> Error!");
    return res.status(500).send(error);
  }
};

// ranking with word lenght value
const rankingWordLength = async (req, res) => {
  const { value: lengthValue } = req.params;
  try {
    const apiCall = await fetchText();
    const response = await textAnalysis(apiCall, lengthValue);
    logger.apiLogger.log("info", "v2/ranking/length -> Entregado con éxito!");
    return res.status(200).send({ data: response });
  } catch (error) {
    logger.apiLogger.log("error", "v2/ranking/length -> Error!");
    return res.status(500).send(error);
  }
};

module.exports = { text, ranking, rankingWordLength };
