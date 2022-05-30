const logger = require("../controllers/logger.controllers.js");

const rankLimiter = (data, limit = 0) => {
  try {
    let response;
    limit == 0 ? (response = data) : (response = data.slice(0, limit));
    logger.apiLogger.log("info", "rank limiter service -> OK!");
    return response;
  } catch (error) {
    logger.apiLogger.log("error", "rank limiter service -> Error!");
    console.log(error);
    return {
      mensaje: "error en el limitador de ranking",
      error: `${error}`,
    };
  }
};

module.exports = { rankLimiter };
