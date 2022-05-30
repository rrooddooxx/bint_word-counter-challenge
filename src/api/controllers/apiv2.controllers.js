// services import
const { fetchText } = require("../services/fetchtext.services.js");
const { textAnalysis } = require("../services/textanalysisv2.services.js");

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
    res.send(apiCall);
  } catch (error) {
    res.send(error);
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
    res.send({ data: response });
  } catch (error) {
    res.send(error);
  }
};

// ranking with word lenght value
const rankingWordLength = async (req, res) => {
  const { value: lengthValue } = req.params;
  try {
    const apiCall = await fetchText();
    const response = await textAnalysis(apiCall, lengthValue);
    res.send({ data: response });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { text, ranking, rankingWordLength };
