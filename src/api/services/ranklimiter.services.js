const rankLimiter = (data, limit = 0) => {
  let response;
  limit == 0 ? (response = data) : (response = data.slice(0, limit));
  return response;
};

module.exports = { rankLimiter };
