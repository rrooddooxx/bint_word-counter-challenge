// services import
const { fetchText } = require("../services/fetchtext.services.js");
const { textAnalysis } = require("../services/textanalysis.services.js");

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
    const { length, limit } = req.query;
    const apiCall = await fetchText();
    const response = await textAnalysis(apiCall, length, limit);
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
