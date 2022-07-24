import { fetchData } from "../fetchData.js";

describe("Pruebas en utils/fetchData", () => {
  test("Objeto de respuesta tiene la estructura esperada", async () => {
    const response = await fetchData();
    expect(response).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      ranking: expect.any(Array),
    });
  });

  test("Ranking de palabras devuelve un arreglo con el límite de resultados indicado", async () => {
    const arrLength = 10;
    const response = await fetchData(0, arrLength);
    expect(response.ranking.length).toBe(arrLength);
  });

  test("Palabras del ranking responden al límite de largo (densidad) de palabra", async () => {
    const responseTwoCharsMin = await fetchData(1, 2);
    expect(responseTwoCharsMin.ranking[1].word.length).toBeGreaterThanOrEqual(
      2
    );
    const responseThreeCharsMin = await fetchData(2, 2);
    expect(responseThreeCharsMin.ranking[1].word.length).toBeGreaterThanOrEqual(
      3
    );
  });
});
