const paginationService = (data, limit = 5, page = 1, length = 0, url) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  let response = {
    links: {},
    results: data.slice(startIndex, endIndex),
  };

  if (startIndex > 0) {
    response.links.prev =
      url + `?length=${length}&page=${page - 1}&limit=${limit}`;
  } else if (data.length > endIndex) {
    response.links.next =
      url + `?length=${length}&page=${page + 1}&limit=${limit}`;
  }

  return response;
};

module.exports = { paginationService };
