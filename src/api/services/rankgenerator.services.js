// ranking generator
const wordRankingGenerator = (wordsArr = [], length = 0) => {
  try {
    let response = [];
    const ranking = wordsArr.reduce((acc, val) => {
      // agrego palabra al objeto acumulador
      !Object.hasOwn(acc, val) ? (acc[val] = 1) : (acc[val] += 1);
      return acc;
    }, {});

    // word length options
    const sortedRankingArr = Object.entries(ranking).sort(
      (a, b) => b[1] - a[1]
    );
    let rankingNumber = 1;

    if (length == 0) {
      for (let [key, value] of sortedRankingArr) {
        response.push({
          position: rankingNumber,
          word: key,
          occurrences: value,
        });
        rankingNumber += 1;
      }
    } else if (length == 2) {
      for (let [key, value] of sortedRankingArr) {
        if (key.length > 3) {
          response.push({
            position: rankingNumber,
            word: key,
            occurrences: value,
          });
          rankingNumber += 1;
        }
      }
    } else if (length == 1) {
      for (let [key, value] of sortedRankingArr) {
        if (key.length > 1) {
          response.push({
            position: rankingNumber,
            word: key,
            occurrences: value,
          });
          rankingNumber += 1;
        }
      }
    } else {
      response = { error: "Largo no especificado en API" };
    }

    return response;
  } catch (error) {
    console.log(error);
    return {
      mensaje: "error en el generador de ranking",
      error: `${error}`,
    };
  }
};

module.exports = { wordRankingGenerator };
