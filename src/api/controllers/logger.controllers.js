const { createLogger, transports, format } = require("winston");

const apiLogger = createLogger({
  transports: [
    new transports.File({
      filename: "api.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      filename: "api-error.log",
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = { apiLogger };
